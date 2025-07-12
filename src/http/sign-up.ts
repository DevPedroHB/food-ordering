import { account, appwriteConfig, avatars, databases } from "@/libs/appwrite";
import type { SignUpSchema } from "@/types/schemas/sign-up-schema";
import type { User } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import { ID } from "react-native-appwrite";
import { signIn } from "./sign-in";

export async function signUp({ name, email, password }: SignUpSchema) {
	const newAccount = await account.create(ID.unique(), email, password, name);

	await signIn({ email, password });

	const avatarUrl = await avatars.getInitialsURL(name);

	const user = await databases.createDocument<User>(
		appwriteConfig.databaseId,
		appwriteConfig.usersCollectionId,
		ID.unique(),
		{
			accountId: newAccount.$id,
			name,
			email,
			avatarUrl,
		},
	);

	return user;
}

export function useSingUp() {
	return useMutation({
		mutationKey: ["sign-up"],
		mutationFn: signUp,
	});
}
