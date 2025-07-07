import { QueryClientProvider } from "@/providers/query-client-provider";
import { useAuthStore } from "@/stores/auth-store";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import "./globals.css";

export default function RootLayout() {
	const { fetchCurrentUser, isLoading } = useAuthStore();

	const [fontsLoaded, error] = useFonts({
		"QuickSand-Bold": require("../../assets/fonts/Quicksand-Bold.ttf"),
		"QuickSand-Medium": require("../../assets/fonts/Quicksand-Medium.ttf"),
		"QuickSand-Regular": require("../../assets/fonts/Quicksand-Regular.ttf"),
		"QuickSand-SemiBold": require("../../assets/fonts/Quicksand-SemiBold.ttf"),
		"QuickSand-Light": require("../../assets/fonts/Quicksand-Light.ttf"),
	});

	useEffect(() => {
		if (error) {
			throw error;
		}

		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [error, fontsLoaded]);

	useEffect(() => {
		fetchCurrentUser();
	}, [fetchCurrentUser]);

	if (!fontsLoaded || isLoading) {
		return null;
	}

	return (
		<QueryClientProvider>
			<Stack screenOptions={{ headerShown: false }} />
		</QueryClientProvider>
	);
}
