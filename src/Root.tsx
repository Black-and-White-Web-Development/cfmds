import { Outlet } from "react-router-dom";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const App = () => {
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
