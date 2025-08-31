import { Outlet } from "react-router-dom";

import { useScrollToTop } from "@/hooks/useScrollToTop";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const App = () => {
	useScrollToTop();

	return (
		<>
			<Header />
			<main className="fb-col-wrapper">
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default App;
