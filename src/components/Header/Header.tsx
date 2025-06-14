import clsx from "clsx";

import { useBreakpoint } from "@/hooks/useBreakpoint";

import Navigation from "@/components/Navigation";
import NavigationDialog from "@/components/NavigationDialog";
import "./Header.scss";

const Header = function () {
	const isMobile = useBreakpoint();

	return (
		<header className={clsx("header", { "fb-col-wrapper": !isMobile })}>
			{isMobile ? <NavigationDialog /> : <Navigation />}
		</header>
	);
};

export default Header;
