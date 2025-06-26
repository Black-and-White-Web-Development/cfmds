import { useBreakpoint } from "@/hooks/useBreakpoint";

import Navigation from "@/components/Navigation";
import NavLogo from "@/components/Navigation/NavLogo";
import NavigationDialog from "@/components/NavigationDialog";
import "./Header.scss";

const Header = function () {
	const isTablet = useBreakpoint();

	const tabletHeader = (
		<header className="header header--mobile fb-col-wrapper">
			<div className="header__container">
				<NavLogo />
				<NavigationDialog />
			</div>
		</header>
	);

	const header = (
		<header className="header fb-col-wrapper">
			<Navigation />
		</header>
	);

	return isTablet ? tabletHeader : header;
};

export default Header;
