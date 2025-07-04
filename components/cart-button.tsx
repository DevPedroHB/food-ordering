import { icons } from "@/constants/icons";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export function CartButton() {
	const totalItems = 10;

	return (
		<TouchableOpacity className="cart-btn" onPress={() => router.push("/cart")}>
			<Image source={icons.bag} className="size-5" resizeMode="contain" />

			{totalItems > 0 && (
				<View className="cart-badge">
					<Text className="text-white small-bold">{totalItems}</Text>
				</View>
			)}
		</TouchableOpacity>
	);
}
