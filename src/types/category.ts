import type { Models } from "react-native-appwrite";

export interface Category extends Models.Document {
	name: string;
	description: string;
}
