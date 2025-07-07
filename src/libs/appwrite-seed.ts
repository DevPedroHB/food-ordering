import { seed } from "@/constants/seed";
import { ID } from "react-native-appwrite";
import { appwriteConfig, databases, storage } from "./appwrite";

async function clearAll(collectionId: string): Promise<void> {
	const list = await databases.listDocuments(
		appwriteConfig.databaseId,
		collectionId,
	);

	await Promise.all(
		list.documents.map((doc) =>
			databases.deleteDocument(
				appwriteConfig.databaseId,
				collectionId,
				doc.$id,
			),
		),
	);
}

async function clearStorage() {
	const list = await storage.listFiles(appwriteConfig.assetsBucketId);

	await Promise.all(
		list.files.map((file) =>
			storage.deleteFile(appwriteConfig.assetsBucketId, file.$id),
		),
	);
}

async function uploadImageToStorage(imageUrl: string) {
	const response = await fetch(imageUrl);
	const blob = await response.blob();

	const fileObj = {
		name: imageUrl.split("/").pop() || `file-${Date.now()}.jpg`,
		type: blob.type,
		size: blob.size,
		uri: imageUrl,
	};

	const file = await storage.createFile(
		appwriteConfig.assetsBucketId,
		ID.unique(),
		fileObj,
	);

	return storage.getFileViewURL(appwriteConfig.assetsBucketId, file.$id);
}

export async function appwriteSeed() {
	// 1. Clear all
	await clearAll(appwriteConfig.categoriesCollectionId);
	await clearAll(appwriteConfig.customizationsCollectionId);
	await clearAll(appwriteConfig.menusCollectionId);
	await clearAll(appwriteConfig.menuCustomizationsCollectionId);

	await clearStorage();

	// 2. Create Categories
	const categoryMap: Record<string, string> = {};

	for (const cat of seed.categories) {
		const doc = await databases.createDocument(
			appwriteConfig.databaseId,
			appwriteConfig.categoriesCollectionId,
			ID.unique(),
			cat,
		);

		categoryMap[cat.name] = doc.$id;
	}

	// 3. Create Customizations
	const customizationMap: Record<string, string> = {};

	for (const cus of seed.customizations) {
		const doc = await databases.createDocument(
			appwriteConfig.databaseId,
			appwriteConfig.customizationsCollectionId,
			ID.unique(),
			{
				name: cus.name,
				price: cus.price,
				type: cus.type,
			},
		);

		customizationMap[cus.name] = doc.$id;
	}

	// 4. Create Menu Items
	const menuMap: Record<string, string> = {};

	for (const item of seed.menu) {
		const uploadedImage = await uploadImageToStorage(item.imageUrl);

		const doc = await databases.createDocument(
			appwriteConfig.databaseId,
			appwriteConfig.menusCollectionId,
			ID.unique(),
			{
				name: item.name,
				description: item.description,
				imageUrl: uploadedImage,
				price: item.price,
				rating: item.rating,
				calories: item.calories,
				protein: item.protein,
				categories: categoryMap[item.category_name],
			},
		);

		menuMap[item.name] = doc.$id;

		// 5. Create menu_customizations
		for (const cusName of item.customizations) {
			await databases.createDocument(
				appwriteConfig.databaseId,
				appwriteConfig.menuCustomizationsCollectionId,
				ID.unique(),
				{
					menus: doc.$id,
					customizations: customizationMap[cusName],
				},
			);
		}
	}

	console.log("✅ Seeding complete.");
}
