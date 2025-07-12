import { appwriteConfig } from "@/libs/appwrite";
import type { Menu } from "@/types/menu";
import { Image, Platform, Text, TouchableOpacity } from "react-native";

interface IMenuCard {
	menu: Menu;
}

export function MenuCard({ menu }: IMenuCard) {
	const imageUri = `${menu.imageUrl}?project=${appwriteConfig.projectId}`;

	return (
		<TouchableOpacity
			className="menu-card"
			style={
				Platform.OS === "android"
					? { elevation: 10, shadowColor: "#878787" }
					: {}
			}
		>
			<Image
				source={{ uri: imageUri }}
				className="-top-10 absolute size-32"
				resizeMode="contain"
			/>
			<Text
				className="mb-2 text-dark-100 text-center base-bold"
				numberOfLines={1}
			>
				{menu.name}
			</Text>
			<Text className="mb-4 text-gray-200 body-regular">
				From ${menu.price}
			</Text>
			<TouchableOpacity>
				<Text className="text-primary paragraph-bold">Add to Cart +</Text>
			</TouchableOpacity>
		</TouchableOpacity>
	);
}
