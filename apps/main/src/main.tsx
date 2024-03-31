import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { MainApp } from './app';
import { MicroFront } from './components/Microfront';

const rootElement = document.getElementById("root") as HTMLElement;

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<MainApp />}>
			<Route
				path={`auth/*`}
				element={<MicroFront module="auth" />}
			/>
			<Route
				path={`${"/landing"}/*`}
        		element={<p>Esto es la landing</p>}
			/>
		</Route>,
	),
	{ basename: "/" },
);

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
