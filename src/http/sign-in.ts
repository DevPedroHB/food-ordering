import { account } from "@/libs/appwrite";
import type { SignInSchema } from "@/types/schemas/sign-in-schema";
import { useMutation } from "@tanstack/react-query";

export async function signIn({ email, password }: SignInSchema) {
	const session = await account.createEmailPasswordSession(email, password);

	return session;
}

export function useSignIn() {
	return useMutation({
		mutationKey: ["sign-in"],
		mutationFn: signIn,
	});
}
