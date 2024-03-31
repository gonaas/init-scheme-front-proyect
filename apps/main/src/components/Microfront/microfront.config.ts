import { lazy } from "react";
import type { MicroFront, MicroFrontModules } from "./types";

const localModules: MicroFrontModules = {
	auth: lazy(() => import("../../../../auth/src/app/AuthApp")),
};

const remoteModules: MicroFrontModules = {
	auth: lazy(() =>
		import("auth/App").catch(() => ({ default: localModules.auth })),
	),
};

export const microFront: MicroFront = {
	locals: localModules,
	remotes: appEnv.DEV_MODE ? localModules : remoteModules,
};



