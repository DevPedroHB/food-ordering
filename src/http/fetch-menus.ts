import { appwriteConfig, databases } from "@/libs/appwrite";
import type { Menu } from "@/types/menu";
import { useQuery } from "@tanstack/react-query";
import { Query } from "react-native-appwrite";

export type FetchMenusRequest = {
	category?: string;
	query?: string;
};

export async function fetchMenus({ category, query }: FetchMenusRequest) {
	const queries: string[] = [];

	if (category) queries.push(Query.equal("categories", category));
	if (query) queries.push(Query.search("name", query));

	const menus = await databases.listDocuments<Menu>(
		appwriteConfig.databaseId,
		appwriteConfig.menusCollectionId,
		queries,
	);

	return menus.documents;
}

export function useFetchMenus({ category, query }: FetchMenusRequest) {
	return useQuery({
		queryKey: ["fetch-menus", category, query],
		queryFn: () => fetchMenus({ category, query }),
	});
}
