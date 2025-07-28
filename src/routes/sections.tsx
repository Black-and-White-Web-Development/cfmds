import type { RouteObject } from "react-router-dom";

import Sections from "@/pages/Sections";
import Brass from "@/pages/Sections/Brass";
import Choirs from "@/pages/Sections/Choirs";
import ClassicalGuitar from "@/pages/Sections/ClassicalGuitar";
import Dance from "@/pages/Sections/Dance";
import Orchestras from "@/pages/Sections/Orchestras";
import Organ from "@/pages/Sections/Organ";
import Piano from "@/pages/Sections/Piano";
import Singing from "@/pages/Sections/Singing";
import Speech from "@/pages/Sections/Speech";
import Strings from "@/pages/Sections/Strings";
import Woodwind from "@/pages/Sections/Woodwind";

const routes: RouteObject = {
	path: "sections",
	children: [
		{ index: true, element: <Sections /> },
		{ path: "brass", element: <Brass /> },
		{ path: "choirs", element: <Choirs /> },
		{ path: "classical-guitar", element: <ClassicalGuitar /> },
		{ path: "dance", element: <Dance /> },
		{ path: "orchestras-bands-percussion", element: <Orchestras /> },
		{ path: "organ", element: <Organ /> },
		{ path: "pianoforte", element: <Piano /> },
		{ path: "singing", element: <Singing /> },
		{ path: "strings", element: <Strings /> },
		{ path: "speech-and-drama", element: <Speech /> },
		{ path: "woodwind", element: <Woodwind /> },
	],
};

export default routes;
