import type { Models } from "react-native-appwrite";

enum CustomizationType {
	topping = "topping",
	side = "side",
	size = "size",
	crust = "crust",
	bread = "bread",
	spice = "spice",
	base = "base",
	sauce = "sauce",
}

export interface Customization extends Models.Document {
	name: string;
	price: number;
	type: CustomizationType;
}
