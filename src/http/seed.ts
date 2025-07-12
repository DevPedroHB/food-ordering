import { appwriteSeed } from "@/libs/appwrite-seed";
import { useMutation } from "@tanstack/react-query";

export async function seed() {
	const result = await appwriteSeed();

	return result;
}

export function useSeed() {
	return useMutation({
		mutationKey: ["seed"],
		mutationFn: seed,
	});
}
