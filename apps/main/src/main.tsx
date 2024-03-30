import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { MainApp } from './app';

const rootElement = document.getElementById("root") as HTMLElement;

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<MainApp />}>
      <Route
				path={`${"/"}/*`}
        element={<p>Esto es la main</p>}
			/>
			<Route
				path={`${"/landing"}/*`}
        element={<p>Esto es la landing</p>}
			/>
      <Route
				path={`${"/auth"}/*`}
        element={<p>Esto es el auth</p>}
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

//element={<MicroFrontend module="auth" />}
//element={<MicroFrontend module="landing" />}
