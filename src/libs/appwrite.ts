import { env } from "@/env";
import { Account, Avatars, Client, Databases } from "react-native-appwrite";

export const appwriteConfig = {
	databaseId: env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
	userCollectionId: "68683e95000ba135b03d",
};

export const client = new Client();

client
	.setEndpoint(env.EXPO_PUBLIC_APPWRITE_ENDPOINT)
	.setProject(env.EXPO_PUBLIC_APPWRITE_PROJECT_ID)
	.setPlatform(env.EXPO_PUBLIC_APPWRITE_PLATFORM);

export const account = new Account(client);

export const databases = new Databases(client);

export const avatars = new Avatars(client);
