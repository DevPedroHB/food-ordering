import type { Models } from "react-native-appwrite";

export interface Menu extends Models.Document {
	name: string;
	description: string;
	imageUrl: string;
	rating: number;
	calories: number;
	protein: number;
	price: number;
	type: string;
}
