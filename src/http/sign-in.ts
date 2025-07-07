import { account } from "@/libs/appwrite";
import type { SignInSchema } from "@/types/schemas/sign-in-schema";

export async function signIn({ email, password }: SignInSchema) {
	const session = await account.createEmailPasswordSession(email, password);

	return session;
}
