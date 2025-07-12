import { formatKeyStorage } from "@/functions/format-key-storage";

export const keys = {
	AUTH_STORE: formatKeyStorage("auth-store"),
	CART_STORE: formatKeyStorage("cart-store"),
} as const;
