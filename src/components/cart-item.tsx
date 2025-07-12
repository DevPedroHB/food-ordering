import { icons } from "@/constants/icons";
import {
	type CartItem as CartItemProps,
	useCartStore,
} from "@/stores/cart-store";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface ICartItem {
	item: CartItemProps;
}

export function CartItem({ item }: ICartItem) {
	const { decreaseQty, increaseQty, removeItem } = useCartStore();

	return (
		<View className="cart-item">
			<View className="flex flex-row items-center gap-x-3">
				<View className="cart-item__image">
					<Image
						source={{ uri: item.imageUrl }}
						className="rounded-lg size-4/5"
						resizeMode="cover"
					/>
				</View>
				<View>
					<Text className="text-dark-100 base-bold">{item.name}</Text>
					<Text className="mt-1 text-primary paragraph-bold">
						${item.price}
					</Text>
					<View className="flex flex-row items-center gap-x-4 mt-2">
						<TouchableOpacity
							onPress={() => decreaseQty(item.id, item.customizations!)}
							className="cart-item__actions"
						>
							<Image
								source={icons.minus}
								className="size-1/2"
								resizeMode="contain"
								tintColor={"#FF9C01"}
							/>
						</TouchableOpacity>
						<Text className="text-dark-100 base-bold">{item.quantity}</Text>
						<TouchableOpacity
							onPress={() => increaseQty(item.id, item.customizations!)}
							className="cart-item__actions"
						>
							<Image
								source={icons.plus}
								className="size-1/2"
								resizeMode="contain"
								tintColor={"#FF9C01"}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<TouchableOpacity
				onPress={() => removeItem(item.id, item.customizations!)}
				className="flex-center"
			>
				<Image source={icons.trash} className="size-5" resizeMode="contain" />
			</TouchableOpacity>
		</View>
	);
}
