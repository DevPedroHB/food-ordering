import { z } from "zod";

export const signUpSchema = z.object({
	name: z.string().min(3),
	email: z.string().email(),
	password: z.string().min(8).max(32),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
