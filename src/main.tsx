import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import routes from "./routes";
import "/src/scss/style.scss";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
