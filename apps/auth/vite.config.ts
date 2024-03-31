import federation from "@originjs/vite-plugin-federation";
import { defineConfig, mergeConfig } from "vite";
import {
	viteConfigBase,
	federationSharedLibs as shared,
} from "../../packages/vite-config";

const port = Number(process.env.AUTH_APP_PORT) || 3001;

export default defineConfig(
	mergeConfig(
		{
			...viteConfigBase,
			plugins: [
				...(viteConfigBase.plugins || []),
				federation({
					name: "auth",
					filename: "remoteEntry.js",
					exposes: {
						"./App": "./src/app/AuthApp.tsx",
					},
					shared,
				}),
			],
		},
		{
			server: {
				port,
				hmr: true,
			},
			preview: {
				port,
			},
		},
	),
);
