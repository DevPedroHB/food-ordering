import { Redirect, Slot } from "expo-router";

export default function AuthLayout() {
	const isAuthenticated = true;

	if (isAuthenticated) {
		return <Redirect href={"/index"} />;
	}

	return <Slot />;
}
