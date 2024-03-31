import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import LandingApp from "./app/LandingApp";

const rootElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<BrowserRouter basename={"/"}>
			<LandingApp />
		</BrowserRouter>
	</React.StrictMode>,
);
