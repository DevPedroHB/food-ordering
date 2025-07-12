import { CartButton } from "@/components/cart-button";
import { useFetchCategories } from "@/http/fetch-categories";
import { type FetchMenusRequest, useFetchMenus } from "@/http/fetch-menus";
import clsx from "clsx";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";

export default function Search() {
	const { category, query } =
		useLocalSearchParams<Partial<FetchMenusRequest>>();

	const { data: menus, isLoading: isMenuLoading } = useFetchMenus({
		category,
		query,
	});

	const { data: categories, isLoading: isCategoriesLoading } =
		useFetchCategories();

	return (
		<SafeAreaView className="bg-white h-full">
			<FlatList
				data={menus}
				renderItem={({ item, index }) => {
					const isFirstRightColItem = index % 2 === 0;

					return (
						<View
							className={clsx(
								"flex-1 max-w-[48%]",
								!isFirstRightColItem ? "mt-10" : "mt-0",
							)}
						>
							<MenuCard item={item as MenuItem} />
						</View>
					);
				}}
				keyExtractor={(item) => item.$id}
				numColumns={2}
				columnWrapperClassName="gap-7"
				contentContainerClassName="gap-7 px-5 pb-32"
				ListHeaderComponent={() => (
					<View className="gap-5 my-5">
						<View className="flex-row flex-between w-full">
							<View className="flex-start">
								<Text className="text-primary uppercase small-bold">
									Search
								</Text>
								<View className="flex-row flex-start gap-x-1 mt-0.5">
									<Text className="text-dark-100 paragraph-semibold">
										Find your favorite food
									</Text>
								</View>
							</View>
							<CartButton />
						</View>
						<SearchBar />
						<Filter categories={categories!} />
					</View>
				)}
				ListEmptyComponent={() => !isMenuLoading && <Text>No results</Text>}
			/>
		</SafeAreaView>
	);
}
