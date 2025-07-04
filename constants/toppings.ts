import { images } from "./images";

export const toppings = [
	{
		name: "Avocado",
		image: images.avocado,
		price: 1.5,
	},
	{
		name: "Bacon",
		image: images.bacon,
		price: 2.0,
	},
	{
		name: "Cheese",
		image: images.cheese,
		price: 1.0,
	},
	{
		name: "Cucumber",
		image: images.cucumber,
		price: 0.5,
	},
	{
		name: "Mushrooms",
		image: images.mushrooms,
		price: 1.2,
	},
	{
		name: "Onions",
		image: images.onions,
		price: 0.5,
	},
	{
		name: "Tomatoes",
		image: images.tomatoes,
		price: 0.7,
	},
] as const;
