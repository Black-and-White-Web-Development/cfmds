import { Outlet } from "react-router-dom";

import { useScrollToTop } from "@/hooks/useScrollToTop";

import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const App = () => {
	useScrollToTop();

	return (
		<>
			<Header />
			<main className="fb-col-wrapper">
				<AnnouncementBar />
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default App;
