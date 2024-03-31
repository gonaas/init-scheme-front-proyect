import federation from "@originjs/vite-plugin-federation";
import { defineConfig, mergeConfig } from "vite";
import {
	viteConfigBase,
	federationSharedLibs as shared,
} from "../../packages/vite-config";

const port = Number(process.env.LANDING_APP_PORT) || 3002;

export default defineConfig(
	mergeConfig(
		{
			...viteConfigBase,
			plugins: [
				...(viteConfigBase.plugins || []),
				federation({
					name: "landing",
					filename: "remoteEntry.js",
					exposes: {
						"./App": "./src/app/LandingApp.tsx",
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
