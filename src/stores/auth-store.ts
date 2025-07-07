import { keys } from "@/constants/keys";
import { getCurrentUser } from "@/http/get-current-user";
import type { User } from "@/types/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IAuthStore {
	user?: User | null;
	isLoading: boolean;
	setUser: (user: User | null) => void;
	setIsLoading: (isLoading: boolean) => void;
	fetchCurrentUser: () => Promise<void>;
}

export const useAuthStore = create(
	persist<IAuthStore>(
		(set) => ({
			user: null,
			isLoading: true,
			setUser(user) {
				set({ user });
			},
			setIsLoading(isLoading) {
				set({ isLoading });
			},
			async fetchCurrentUser() {
				try {
					const user = await getCurrentUser();

					set({ user: user as User });
				} catch (error) {
					console.error(error);
				} finally {
					set({ isLoading: false });
				}
			},
		}),
		{
			name: keys.AUTH_STORE,
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
