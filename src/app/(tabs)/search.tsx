import { appwriteSeed } from "@/libs/appwrite-seed";
import { Button, SafeAreaView, Text } from "react-native";

export default function Search() {
	function handleSeed() {
		appwriteSeed().catch((error) => {
			console.error("Failed to seed the database.", error);
		});
	}

	return (
		<SafeAreaView>
			<Text>Search</Text>
			<Button title="Seed" onPress={handleSeed} />
		</SafeAreaView>
	);
}
