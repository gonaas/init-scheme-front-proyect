import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import istanbul from "vite-plugin-istanbul";

// https://vitejs.dev/config/
export const viteConfigBase = defineConfig({
	plugins: [
		react(),
		istanbul({
			cypress: true,
			requireEnv: false,
		}),
	],
	define: {
		// Use global env instead each vite import.meta.env
		appEnv: {
			...Object.entries(process.env).reduce((acc, [key, value]) => ({
				...acc,
				[key]: value,
			})),
		},
	},
	optimizeDeps: {
		// Force pre-bundle react-dom to preven refreshing issues running tests
		include: ["react-dom"],
	},
	build: {
		sourcemap: true,
		modulePreload: false,
		target: "esnext",
		minify: false,
		cssCodeSplit: false,
	},
});
