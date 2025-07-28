import clsx from "clsx";
import { Link } from "react-router-dom";

import { useBreakpoint } from "@/hooks/useBreakpoint";
import "./NavLogo.scss";

import logo from "@/assets/cfmds-logo.svg";

const NavLogo = () => {
	const isTablet = useBreakpoint();

	return (
		<div className={clsx("nav-logo", { nav__logo: isTablet ? "header__logo" : "nav__logo" })}>
			<Link className="nav-logo__link" to="/" aria-label="Home">
				<img className="nav-logo__image" src={logo} alt="CFMDS logo" width="96" />
			</Link>
		</div>
	);
};

export default NavLogo;
