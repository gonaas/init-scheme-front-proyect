import * as path from "path";
import federation from "@originjs/vite-plugin-federation";
import { defineConfig, mergeConfig } from "vite";
import {
	viteConfigBase,
	federationSharedLibs as shared,
} from "./packages/vite-config";

export default defineConfig(
	mergeConfig(
		{
			...viteConfigBase,
			plugins: [
				...(viteConfigBase.plugins || []),
				federation({
					name: "main",
					shared,
				}),
			],
			test: {
				environment: "jsdom",
			},
		},
		{
		},
	),
);
