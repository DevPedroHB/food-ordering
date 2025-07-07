import { env } from "@/env";
import {
	Account,
	Avatars,
	Client,
	Databases,
	Storage,
} from "react-native-appwrite";

export const appwriteConfig = {
	databaseId: env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
	usersCollectionId: env.EXPO_PUBLIC_APPWRITE_USERS_COLLECTION_ID,
	categoriesCollectionId: env.EXPO_PUBLIC_APPWRITE_CATEGORIES_COLLECTION_ID,
	menusCollectionId: env.EXPO_PUBLIC_APPWRITE_MENUS_COLLECTION_ID,
	customizationsCollectionId:
		env.EXPO_PUBLIC_APPWRITE_CUSTOMIZATIONS_COLLECTION_ID,
	menuCustomizationsCollectionId:
		env.EXPO_PUBLIC_APPWRITE_MENU_CUSTOMIZATIONS_COLLECTION_ID,
	assetsBucketId: env.EXPO_PUBLIC_APPWRITE_ASSETS_BUCKET_ID,
};

export const client = new Client();

client
	.setEndpoint(env.EXPO_PUBLIC_APPWRITE_ENDPOINT)
	.setProject(env.EXPO_PUBLIC_APPWRITE_PROJECT_ID)
	.setPlatform(env.EXPO_PUBLIC_APPWRITE_PLATFORM);

export const account = new Account(client);

export const databases = new Databases(client);

export const storage = new Storage(client);

export const avatars = new Avatars(client);
