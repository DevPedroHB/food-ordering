import { images } from "./images";

export const offers = [
	{
		id: 1,
		title: "SUMMER COMBO",
		image: images.burgerOne,
		color: "#D33B0D",
	},
	{
		id: 2,
		title: "BURGER BASH",
		image: images.burgerTwo,
		color: "#DF5A0C",
	},
	{
		id: 3,
		title: "PIZZA PARTY",
		image: images.pizzaOne,
		color: "#084137",
	},
	{
		id: 4,
		title: "BURRITO DELIGHT",
		image: images.buritto,
		color: "#EB920C",
	},
] as const;
