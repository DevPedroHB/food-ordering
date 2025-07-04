import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	type SignInSchema,
	signInSchema,
} from "@/types/schemas/sign-in-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";

export default function SignIn() {
	const { control, handleSubmit } = useForm<SignInSchema>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function handleSignIn(data: SignInSchema) {
		console.log(data);

		router.replace("/");
	}

	return (
		<View className="gap-10 bg-white mt-5 p-5 rounded-lg">
			<Controller
				name="email"
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<View className="w-full">
						<Label>Email</Label>
						<Input
							autoCapitalize="none"
							placeholder="Enter your email"
							keyboardType="email-address"
							value={value}
							onChangeText={onChange}
							onBlur={onBlur}
						/>
					</View>
				)}
			/>
			<Controller
				name="password"
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<View className="w-full">
						<Label>Password</Label>
						<Input
							autoCapitalize="none"
							placeholder="Enter your password"
							secureTextEntry={true}
							value={value}
							onChangeText={onChange}
							onBlur={onBlur}
						/>
					</View>
				)}
			/>
			<Button onPress={handleSubmit(handleSignIn)}>
				<Button.Title>Sign In</Button.Title>
			</Button>
			<View className="flex flex-row justify-center gap-2 mt-5">
				<Text className="text-gray-100 base-regular">
					Don't have an account?
				</Text>
				<Link href="/sign-up" className="text-primary base-bold">
					Sign Up
				</Link>
			</View>
		</View>
	);
}
