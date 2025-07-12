import { icons } from "@/constants/icons";
import { useCartStore } from "@/stores/cart-store";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export function CartButton() {
	const { getTotalItems } = useCartStore();
	const totalItems = getTotalItems();

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
