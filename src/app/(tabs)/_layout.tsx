import { useAuthStore } from "@/stores/auth-store";
import { Redirect, Slot } from "expo-router";

export default function TabsLayout() {
	const { user } = useAuthStore();

	if (!user) {
		return <Redirect href="/sign-in" />;
	}

	return <Slot />;
}
