import { getQueryClient } from "@/libs/get-query-client";
import { QueryClientProvider as ReactQueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

interface IQueryClientProvider {
	children: ReactNode;
}

export function QueryClientProvider({ children }: IQueryClientProvider) {
	const queryClient = getQueryClient();

	return (
		<ReactQueryClientProvider client={queryClient}>
			{children}
		</ReactQueryClientProvider>
	);
}
