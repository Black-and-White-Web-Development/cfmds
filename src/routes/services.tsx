import type { RouteObject } from "react-router-dom";

import Services from "@/pages/Services";
import Development from "@/pages/Services/Development";
import Planning from "@/pages/Services/Planning";
import Review from "@/pages/Services/Review";

const routes: RouteObject = {
	path: "services",
	children: [
		{ index: true, element: <Services /> },
		{ path: "planning", element: <Planning /> },
		{ path: "development", element: <Development /> },
		{ path: "review", element: <Review /> },
	],
};

export default routes;
