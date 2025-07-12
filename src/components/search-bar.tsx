import { icons } from "@/constants/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { router, useLocalSearchParams } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import z from "zod/v4";

export const searchSchema = z.object({
	query: z.string(),
});

export type SearchSchema = z.infer<typeof searchSchema>;

export function SearchBar() {
	const searchParams = useLocalSearchParams<{ query: string }>();
	const { control, handleSubmit } = useForm<SearchSchema>({
		resolver: zodResolver(searchSchema),
		defaultValues: {
			query: searchParams.query ?? "",
		},
	});

	function handleSearch(data: SearchSchema) {
		if (data.query.length === 0) {
			router.setParams({ query: undefined });
		}

		router.setParams({ query: data.query.trim() });
	}

	return (
		<View className="searchbar">
			<Controller
				name="query"
				control={control}
				render={({ field }) => (
					<TextInput
						className="flex-1 p-5"
						placeholder="Search for pizzas, burgers..."
						value={field.value}
						onChangeText={field.onChange}
						onSubmitEditing={handleSubmit(handleSearch)}
						placeholderTextColor="#A0A0A0"
						returnKeyType="search"
					/>
				)}
			/>
			<TouchableOpacity className="pr-5" onPress={handleSubmit(handleSearch)}>
				<Image
					source={icons.search}
					className="size-6"
					resizeMode="contain"
					tintColor="#5D5F6D"
				/>
			</TouchableOpacity>
		</View>
	);
}
