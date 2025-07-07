import { icons } from "./icons";

export const tabs = [
	{
		name: "index",
		title: "Home",
		icon: icons.home,
	},
	{
		name: "search",
		title: "Search",
		icon: icons.search,
	},
	{
		name: "cart",
		title: "Cart",
		icon: icons.bag,
	},
	{
		name: "profile",
		title: "Profile",
		icon: icons.person,
	},
] as const;
