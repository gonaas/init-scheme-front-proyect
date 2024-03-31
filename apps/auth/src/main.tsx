import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AuthApp from "./app/AuthApp";

const rootElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<BrowserRouter basename={"/"}>
			<AuthApp />
		</BrowserRouter>
	</React.StrictMode>,
);
