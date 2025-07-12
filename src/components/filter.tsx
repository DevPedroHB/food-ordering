import type { Category } from "@/types/category";
import clsx from "clsx";
import { router, useLocalSearchParams } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { FlatList, Platform, Text, TouchableOpacity } from "react-native";

interface IFilter {
	categories: Category[];
}

export function Filter({ categories }: IFilter) {
	const searchParams = useLocalSearchParams<{ category: string }>();
	const [active, setActive] = useState(searchParams.category || "all");

	const handleFilter = useCallback((id: string) => {
		setActive(id);

		router.setParams({ category: id === "all" ? undefined : id });
	}, []);

	const filterData = [{ $id: "all", name: "All" }, ...categories];

	useEffect(() => {
		setActive(searchParams.category || "all");
	}, [searchParams]);

	return (
		<FlatList
			data={filterData}
			keyExtractor={(item) => item.$id}
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerClassName="gap-x-2 pb-3"
			renderItem={({ item }) => {
				const isActive = active === item.$id;

				return (
					<TouchableOpacity
						className={clsx("filter", isActive ? "bg-amber-500" : "bg-white")}
						style={
							Platform.OS === "android"
								? { elevation: 5, shadowColor: "#878787" }
								: {}
						}
						onPress={() => handleFilter(item.$id)}
					>
						<Text
							className={clsx(
								"body-medium",
								isActive ? "text-white" : "text-gray-200",
							)}
						>
							{item.name}
						</Text>
					</TouchableOpacity>
				);
			}}
		/>
	);
}
