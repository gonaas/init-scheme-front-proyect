import type { ReactNode } from "react";

export interface ErrorBoundaryProps {
	readonly fallback: ReactNode;
	readonly children: ReactNode;
}

export interface ErrorBoundaryState {
	readonly hasError: boolean;
}
