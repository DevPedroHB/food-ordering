import type { Models } from "react-native-appwrite";

export interface User extends Models.Document {
	name: string;
	email: string;
	avatarUrl: string;
	accountId: string;
}
