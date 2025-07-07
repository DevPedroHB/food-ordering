import z from "zod";

export const envSchema = z.object({
	// Appwrite
	EXPO_PUBLIC_APPWRITE_PROJECT_ID: z.string(),
	EXPO_PUBLIC_APPWRITE_ENDPOINT: z.string(),
	EXPO_PUBLIC_APPWRITE_PLATFORM: z.string(),
	EXPO_PUBLIC_APPWRITE_DATABASE_ID: z.string(),
	// Appwrite Collections
	EXPO_PUBLIC_APPWRITE_USERS_COLLECTION_ID: z.string(),
	EXPO_PUBLIC_APPWRITE_CATEGORIES_COLLECTION_ID: z.string(),
	EXPO_PUBLIC_APPWRITE_MENUS_COLLECTION_ID: z.string(),
	EXPO_PUBLIC_APPWRITE_CUSTOMIZATIONS_COLLECTION_ID: z.string(),
	EXPO_PUBLIC_APPWRITE_MENU_CUSTOMIZATIONS_COLLECTION_ID: z.string(),
	// Appwrite Buckets
	EXPO_PUBLIC_APPWRITE_ASSETS_BUCKET_ID: z.string(),
});

export type Env = z.infer<typeof envSchema>;

export const env = envSchema.parse(process.env);
