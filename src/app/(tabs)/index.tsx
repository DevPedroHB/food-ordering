import { CartButton } from "@/components/cart-button";
import { icons } from "@/constants/icons";
import { offers } from "@/constants/offers";
import { useAuthStore } from "@/stores/auth-store";
import { clsx } from "clsx";
import { Fragment } from "react";
import {
	FlatList,
	Image,
	Pressable,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
	const { user } = useAuthStore();

	return (
		<SafeAreaView className="flex-1 bg-white">
			<FlatList
				data={offers}
				renderItem={({ item, index }) => {
					const isEven = index % 2 === 0;

					return (
						<View>
							<Pressable
								className={clsx(
									"offer-card",
									isEven ? "flex-row-reverse" : "flex-row",
								)}
								style={{ backgroundColor: item.color }}
								android_ripple={{ color: "#fffff22" }}
							>
								{() => (
									<Fragment>
										<View className={"h-full w-1/2"}>
											<Image
												source={item.image}
												className={"size-full"}
												resizeMode={"contain"}
											/>
										</View>
										<View
											className={clsx(
												"offer-card__info",
												isEven ? "pl-10" : "pr-10",
											)}
										>
											<Text className="text-white leading-tight h1-bold">
												{item.title}
											</Text>
											<Image
												source={icons.arrowRight}
												className="size-10"
												resizeMode="contain"
												tintColor="#ffffff"
											/>
										</View>
									</Fragment>
								)}
							</Pressable>
						</View>
					);
				}}
				contentContainerClassName="pb-28 px-5"
				ListHeaderComponent={() => (
					<View className="flex-row flex-between my-5 w-full">
						<View className="flex-start">
							<Text className="text-primary small-bold">DELIVER TO</Text>
							<TouchableOpacity className="flex-row flex-center gap-x-1 mt-0.5">
								<Text className="text-dark-100 paragraph-bold">Croatia</Text>
								<Image
									source={icons.arrowDown}
									className="size-3"
									resizeMode="contain"
								/>
							</TouchableOpacity>
						</View>
						<CartButton />
					</View>
				)}
			/>
		</SafeAreaView>
	);
}
