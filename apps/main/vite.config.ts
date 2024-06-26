import federation from "@originjs/vite-plugin-federation";
import { defineConfig, mergeConfig } from "vite";
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
