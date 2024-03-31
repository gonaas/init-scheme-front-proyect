import * as path from "path";
import federation from "@originjs/vite-plugin-federation";
import { defineConfig, mergeConfig } from "vite";
import {
	viteConfigBase,
	federationSharedLibs as shared,
	federationRemotes as remotes
} from "./packages/vite-config";

export default defineConfig(
	mergeConfig(
		{
			...viteConfigBase,
			plugins: [
				...(viteConfigBase.plugins || []),
				federation({
					name: "main",
					remotes,
					shared,
				}),
			],
			test: {
				environment: "jsdom",
			},
		},
		{
			resolve: {
				alias: [
					{
						find: "@auth",
						replacement: path.resolve(__dirname, "./apps/auth/src"),
					},
				],
			},
		},
	),
);
