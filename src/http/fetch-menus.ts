import { appwriteConfig, databases } from "@/libs/appwrite";
import { useQuery } from "@tanstack/react-query";
import { Query } from "react-native-appwrite";

export interface FetchMenusRequest {
	category?: string;
	query?: string;
}

export async function fetchMenus({ category, query }: FetchMenusRequest) {
	const queries: string[] = [];

	if (category) queries.push(Query.equal("category", category));
	if (query) queries.push(Query.search("name", query));

	const menu = await databases.listDocuments(
		appwriteConfig.databaseId,
		appwriteConfig.menusCollectionId,
		queries,
	);

	return menu.documents;
}

export function useFetchMenus({ category, query }: FetchMenusRequest) {
	return useQuery({
		queryKey: ["fetch-menus", category, query],
		queryFn: () => fetchMenus({ category, query }),
	});
}
