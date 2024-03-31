import type { ReactNode } from "react";
import { Component, Suspense } from "react";
import type { ErrorBoundaryProps, ErrorBoundaryState } from "./types";

// NOTE: We need to use a class component because we need the getDerivedStateFromError lifecycle method
export default class ErrorBoundary extends Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(): ErrorBoundaryState {
		return { hasError: true };
	}

	componentDidCatch(): void {}

	render(): ReactNode {
		if (this.state.hasError) {
			return <Suspense>{this.props.fallback}</Suspense>;
		}

		return <Suspense>{this.props.children}</Suspense>;
	}
}
