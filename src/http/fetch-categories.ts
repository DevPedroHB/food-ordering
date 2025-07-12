import { appwriteConfig, databases } from "@/libs/appwrite";
import type { Category } from "@/types/category";
import { useQuery } from "@tanstack/react-query";

export async function fetchCategories() {
	const categories = await databases.listDocuments<Category>(
		appwriteConfig.databaseId,
		appwriteConfig.categoriesCollectionId,
	);

	return categories.documents;
}

export function useFetchCategories() {
	return useQuery({
		queryKey: ["fetch-categories"],
		queryFn: fetchCategories,
	});
}
