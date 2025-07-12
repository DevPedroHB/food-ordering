import { account, appwriteConfig, databases } from "@/libs/appwrite";
import type { User } from "@/types/user";
import { useQuery } from "@tanstack/react-query";
import { Query } from "react-native-appwrite";

export async function getCurrentUser() {
	const currentAccount = await account.get();

	const user = await databases.listDocuments<User>(
		appwriteConfig.databaseId,
		appwriteConfig.usersCollectionId,
		[Query.equal("accountId", currentAccount.$id)],
	);

	return user.documents[0];
}

export function useGetCurrentUser() {
	return useQuery({
		queryKey: ["get-current-user"],
		queryFn: getCurrentUser,
	});
}
