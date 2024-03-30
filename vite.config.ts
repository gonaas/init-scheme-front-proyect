import * as path from "path";
import federation from "@originjs/vite-plugin-federation";
import { defineConfig, mergeConfig } from "vite";
import {
	viteConfigBase,
	federationSharedLibs as shared,
} from "./packages/vite-config";

// NOTE: We need a root vite config file because cypress component dev server config need it to run
// An alternative is to configure cypress in each micro-frontend but it hinder the dev experience
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
