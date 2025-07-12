import { icons } from "@/constants/icons";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface ICustomHeader {
	title: string;
}

export function CustomHeader({ title }: ICustomHeader) {
	return (
		<View className="custom-header">
			<TouchableOpacity onPress={() => router.back()}>
				<Image
					source={icons.arrowBack}
					className="size-5"
					resizeMode="contain"
				/>
			</TouchableOpacity>
			{title && <Text className="text-dark-100 base-semibold">{title}</Text>}
			<Image source={icons.search} className="size-5" resizeMode="contain" />
		</View>
	);
}
