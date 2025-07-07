import { images } from "@/constants/images";
import { Redirect, Slot } from "expo-router";
import {
	Dimensions,
	Image,
	ImageBackground,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	View,
} from "react-native";

export default function AuthLayout() {
	const isAuthenticated = false;

	if (isAuthenticated) {
		return <Redirect href="/" />;
	}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<ScrollView
				className="bg-white h-screen"
				keyboardShouldPersistTaps="handled"
			>
				<View
					className="relative w-full"
					style={{ height: Dimensions.get("screen").height / 2.25 }}
				>
					<ImageBackground
						source={images.loginGraphic}
						className="rounded-b-lg size-full"
						resizeMode="stretch"
					/>
					<Image
						source={images.logo}
						className="-bottom-16 z-10 absolute self-center size-48"
					/>
				</View>
				<Slot />
			</ScrollView>
		</KeyboardAvoidingView>
	);
}
