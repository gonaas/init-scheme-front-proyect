/// <reference types="vite/client" />

declare const appEnv: {
	readonly DEV_MODE: string;
	readonly API_BASE_URL: string;

	readonly MAIN_APP_URL: string;
	readonly MAIN_APP_PORT: string;

	readonly AUTH_APP_URL: string;
	readonly AUTH_APP_PORT: string;
};

declare module "auth/App" {
	const AuthApp: React.ComponentType;
	export default AuthApp;
}
