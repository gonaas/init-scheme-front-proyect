import type { FC } from "react";
import { ErrorBoundary } from "../ErrorBoundary";
import { microFront } from "./microfront.config";
import { type MicroFrontProps } from "./types";

const MicroFront: FC<MicroFrontProps> = ({ module, ...props }) => {
	const LocalModule = microFront.locals[module];
	const RemoteModule = microFront.remotes[module];
	return (
		<ErrorBoundary fallback={<LocalModule {...props} />}>
			<RemoteModule {...props} />
		</ErrorBoundary>
	);
};

export default MicroFront;
