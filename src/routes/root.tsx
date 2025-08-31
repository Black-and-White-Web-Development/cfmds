import PageNotFound from "@/components/PageNotFound";

import sectionRoutes from "./sections";

import type { RouteObject } from "react-router-dom";

import About from "@/pages/About";
import ArticlePage from "@/pages/Article/Article";
import Contact from "@/pages/Contact";
// import Enter from "@/pages/Enter";
import Home from "@/pages/Home";
import News from "@/pages/News";
import Rules from "@/pages/Rules";
import Volunteers from "@/pages/Volunteers";
import Root from "@/Root";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <Root />,
		errorElement: <PageNotFound />,
		children: [
			{ path: "", element: <Home /> },
			{ path: "about", element: <About /> },
			sectionRoutes,
			{
				path: "news",
				children: [
					{ index: true, element: <News /> },
					{ path: ":documentId", element: <ArticlePage /> },
				],
			},
			{ path: "contact", element: <Contact /> },
			// { path: "enter", element: <Enter /> },
			{ path: "volunteers", element: <Volunteers /> },
			{ path: "rules", element: <Rules /> },
			{ path: "*", element: <PageNotFound /> },
		],
	},
];

export default routes;
