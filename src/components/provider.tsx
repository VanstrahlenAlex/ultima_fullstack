"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";


const queryClient = new QueryClient()
type ProvidersProps = {
	children: ReactNode;
}


const Providers = ({ children }: ProvidersProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			<NextThemeProvider
				attribute={"class"}
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<Toaster />
				{children}
			</NextThemeProvider>
		</QueryClientProvider>
	);
};

export { Providers };