import { useBreakpoint } from "@/hooks/useBreakpoint";

import Navigation from "@/components/Navigation";
import NavigationDialog from "@/components/NavigationDialog";
import "./Header.scss";

import logo from "@/assets/cfmds-logo.svg";

const Header = function () {
	const isTablet = useBreakpoint();

	const tabletHeader = (
		<header className="header header--mobile fb-col-wrapper">
			<div className="header__container">
				<img className="header__logo" src={logo} alt="CFMDS logo" width="96" />
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
