import { tabs } from "@/constants/tabs";
import { useAuthStore } from "@/stores/auth-store";
import clsx from "clsx";
import { Redirect, Tabs } from "expo-router";
import { Image, Text, View } from "react-native";

export default function TabsLayout() {
	const { user } = useAuthStore();

	if (!user) {
		return <Redirect href="/sign-in" />;
	}

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: {
					borderTopLeftRadius: 50,
					borderTopRightRadius: 50,
					borderBottomLeftRadius: 50,
					borderBottomRightRadius: 50,
					marginHorizontal: 20,
					height: 80,
					position: "absolute",
					bottom: 40,
					backgroundColor: "white",
					shadowColor: "#1a1a1a",
					shadowOffset: { width: 0, height: 2 },
					shadowOpacity: 0.1,
					shadowRadius: 4,
					elevation: 5,
				},
			}}
		>
			{tabs.map((tab) => (
				<Tabs.Screen
					key={tab.name}
					name={tab.name}
					options={{
						title: tab.title,
						tabBarIcon: ({ focused }) => (
							<View className="tab-icon">
								<Image
									source={tab.icon}
									className="size-7"
									resizeMode="contain"
									tintColor={focused ? "#FE8C00" : "#5D5F6D"}
								/>
								<Text
									className={clsx(
										"font-bold text-sm",
										focused ? "text-primary" : "text-gray-200",
									)}
								>
									{tab.title}
								</Text>
							</View>
						),
					}}
				/>
			))}
		</Tabs>
	);
}
