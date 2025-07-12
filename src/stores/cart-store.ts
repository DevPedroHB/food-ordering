import { keys } from "@/constants/keys";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface CartCustomization {
	id: string;
	name: string;
	price: number;
	type: string;
}

export interface CartItem {
	id: string;
	name: string;
	price: number;
	imageUrl: string;
	quantity: number;
	customizations?: CartCustomization[];
}

export interface CartStore {
	items: CartItem[];
	addItem: (item: Omit<CartItem, "quantity">) => void;
	removeItem: (id: string, customizations: CartCustomization[]) => void;
	increaseQty: (id: string, customizations: CartCustomization[]) => void;
	decreaseQty: (id: string, customizations: CartCustomization[]) => void;
	clearCart: () => void;
	getTotalItems: () => number;
	getTotalPrice: () => number;
}

function areCustomizationsEqual(
	a?: CartCustomization[],
	b?: CartCustomization[],
) {
	if (!a && !b) return true;
	if (!a || !b || a.length !== b.length) return false;

	const sortedA = [...a].sort((x, y) => x.id.localeCompare(y.id));
	const sortedB = [...b].sort((x, y) => x.id.localeCompare(y.id));

	return sortedA.every((customA, index) => {
		const customB = sortedB[index];
		return (
			customA.id === customB.id &&
			customA.name === customB.name &&
			customA.price === customB.price &&
			customA.type === customB.type
		);
	});
}

export const useCartStore = create(
	persist<CartStore>(
		(set, get) => ({
			items: [],
			addItem(item) {
				const existing = get().items.find(
					(i) =>
						i.id === item.id &&
						areCustomizationsEqual(i.customizations, item.customizations),
				);

				if (existing) {
					set((state) => ({
						items: state.items.map((i) =>
							i === existing ? { ...i, quantity: i.quantity + 1 } : i,
						),
					}));
				} else {
					set((state) => ({
						items: [...state.items, { ...item, quantity: 1 }],
					}));
				}
			},
			removeItem(id, customizations) {
				set((state) => ({
					items: state.items.filter(
						(i) =>
							i.id !== id ||
							!areCustomizationsEqual(i.customizations, customizations),
					),
				}));
			},
			increaseQty(id, customizations) {
				set((state) => ({
					items: state.items.map((i) =>
						i.id === id &&
						areCustomizationsEqual(i.customizations, customizations)
							? { ...i, quantity: i.quantity + 1 }
							: i,
					),
				}));
			},
			decreaseQty(id, customizations) {
				set((state) => ({
					items: state.items
						.map((i) =>
							i.id === id &&
							areCustomizationsEqual(i.customizations, customizations)
								? { ...i, quantity: i.quantity - 1 }
								: i,
						)
						.filter((i) => i.quantity > 0),
				}));
			},
			clearCart() {
				set({ items: [] });
			},
			getTotalItems() {
				return get().items.reduce((acc, item) => acc + item.quantity, 0);
			},
			getTotalPrice() {
				return get().items.reduce((acc, item) => {
					const customizationsTotal =
						item.customizations?.reduce((sum, c) => sum + c.price, 0) || 0;

					return acc + (item.price + customizationsTotal) * item.quantity;
				}, 0);
			},
		}),
		{
			name: keys.CART_STORE,
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
