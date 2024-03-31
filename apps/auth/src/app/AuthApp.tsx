import type { FC } from "react";
import { Route, Routes } from "react-router-dom";

const AuthApp: FC = () => (
	<Routes>
		<Route path={`${"/"}/*`} element={<p>Estamos en auth</p>}/>
	</Routes>
);

export default AuthApp;
