import { images } from "./images";

export const sides = [
	{
		name: "Fries",
		image: images.fries,
		price: 3.5,
	},
	{
		name: "Onion Rings",
		image: images.onionRings,
		price: 4.0,
	},
	{
		name: "Mozarella Sticks",
		image: images.mozarellaSticks,
		price: 5.0,
	},
	{
		name: "Coleslaw",
		image: images.coleslaw,
		price: 2.5,
	},
	{
		name: "Salad",
		image: images.salad,
		price: 4.5,
	},
] as const;
