import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSingUp } from "@/http/sign-up";
import {
	type SignUpSchema,
	signUpSchema,
} from "@/types/schemas/sign-up-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Alert, Text, View } from "react-native";

export default function SignUp() {
	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<SignUpSchema>({
		resolver: zodResolver(signUpSchema),
	});

	const { mutateAsync } = useSingUp();

	async function handleSignUp(data: SignUpSchema) {
		await mutateAsync(data, {
			onError(error) {
				Alert.alert("Error", error.message);
			},
			onSuccess() {
				Alert.alert("Success", "You have successfully signed up!");

				router.replace("/");
			},
		});
	}

	return (
		<View className="gap-10 bg-white mt-5 p-5 rounded-lg">
			<Controller
				name="name"
				control={control}
				render={({ field }) => (
					<View className="w-full">
						<Label>Full name</Label>
						<Input
							placeholder="Enter your full name"
							value={field.value}
							onChangeText={field.onChange}
						/>
					</View>
				)}
			/>
			<Controller
				name="email"
				control={control}
				render={({ field }) => (
					<View className="w-full">
						<Label>Email</Label>
						<Input
							autoCapitalize="none"
							placeholder="Enter your email"
							keyboardType="email-address"
							value={field.value}
							onChangeText={field.onChange}
						/>
					</View>
				)}
			/>
			<Controller
				name="password"
				control={control}
				render={({ field }) => (
					<View className="w-full">
						<Label>Password</Label>
						<Input
							autoCapitalize="none"
							placeholder="Enter your password"
							secureTextEntry={true}
							value={field.value}
							onChangeText={field.onChange}
						/>
					</View>
				)}
			/>
			<Button onPress={handleSubmit(handleSignUp)} isLoading={isSubmitting}>
				<Button.Title>Sign Up</Button.Title>
			</Button>
			<View className="flex flex-row justify-center gap-2 mt-5">
				<Text className="text-gray-100 base-regular">
					Already have an account?
				</Text>
				<Link href="/sign-in" className="text-primary base-bold">
					Sign In
				</Link>
			</View>
		</View>
	);
}
