import { account, appwriteConfig, databases } from "@/libs/appwrite";
import { Query } from "react-native-appwrite";

export async function getCurrentUser() {
	const currentAccount = await account.get();

	const user = await databases.listDocuments(
		appwriteConfig.databaseId,
		appwriteConfig.userCollectionId,
		[Query.equal("accountId", currentAccount.$id)],
	);

	return user.documents[0];
}
