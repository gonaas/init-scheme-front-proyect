import federation from "@originjs/vite-plugin-federation";
import { defineConfig, mergeConfig } from "vite";
import * as path from "path";
import {
	viteConfigBase,
	federationRemotes as remotes,
	federationSharedLibs as shared,
} from "../../packages/vite-config";

// Port for server and preview
const port = Number(process.env.MAIN_APP_PORT || 3000);

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
		},
		{
			resolve: {
				alias: [
					{
						find: "@auth",
						replacement: path.resolve(__dirname, "../auth/src"),
					},
				],
			},
			server: {
				port,
				strictPort: true,
			},
			preview: {
				port,
				strictPort: true,
			},
		},
	),
);
