import type { ComponentType, LazyExoticComponent } from "react";

export interface MicroFrontModules {
	readonly auth: LazyExoticComponent<ComponentType<Record<string, unknown>>>;
}

export interface MicroFront {
	readonly remotes: MicroFrontendModules;
	readonly locals: MicroFrontendModules;
}

export interface MicroFrontProps {
	readonly module: keyof MicroFrontendModules;
	readonly [key: string]: unknown;
}
