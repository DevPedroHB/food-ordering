import z from "zod";

export const envSchema = z.object({
	EXPO_PUBLIC_APPWRITE_PROJECT_ID: z.string(),
	EXPO_PUBLIC_APPWRITE_ENDPOINT: z.string(),
	EXPO_PUBLIC_APPWRITE_PLATFORM: z.string(),
	EXPO_PUBLIC_APPWRITE_DATABASE_ID: z.string(),
});

export type Env = z.infer<typeof envSchema>;

export const env = envSchema.parse(process.env);
