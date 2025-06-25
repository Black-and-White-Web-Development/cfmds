import clsx from "clsx";
import { NavigationMenu } from "radix-ui";
import { Link } from "react-router-dom";

import { useBreakpoint } from "@/hooks/useBreakpoint";

import NavDropdown from "./NavDropdown";
import NavItem from "./NavItem";
import NavSubItem from "./NavSubItem";
import "./Navigation.scss";

import logo from "@/assets/cfmds-logo.svg";

const Navigation = () => {
	const isTablet = useBreakpoint();

	const navLogo = (
		<div className="nav__logo-container">
			<Link className="nav__logo-link" to="/" aria-label="Home">
				<img className="nav__logo" src={logo} alt="CFMDS logo" width="96" />
			</Link>
		</div>
	);

	const navCta = (
		<div className="nav__cta-container">
			<Link className="nav__cta" to="/enter">
				Enter
			</Link>
		</div>
	);

	return (
		<NavigationMenu.Root className={clsx("nav", { "nav--mobile fb-col-wrapper": isTablet })}>
			{!isTablet && navLogo}
			<NavigationMenu.List className="nav__list">
				<NavItem to="/">Home</NavItem>
				<NavItem to="/about">About</NavItem>
				<NavDropdown label="Sections">
					<NavSubItem to="/sections/dance">Dance</NavSubItem>
					{/* prettier-ignore */}
					<NavSubItem to="/sections/brass-orchestras-bands-percussion">Brass, Orchestras, Bands & Percussion</NavSubItem>
					<NavSubItem to="/sections/choirs">Choirs</NavSubItem>
					<NavSubItem to="/sections/classical-guitar">Classical Guitar</NavSubItem>
					<NavSubItem to="/sections/organ">Organ</NavSubItem>
					<NavSubItem to="/sections/pianoforte">Pianoforte</NavSubItem>
					<NavSubItem to="/sections/singing">Singing</NavSubItem>
					<NavSubItem to="/sections/speech-and-drama">Speech & Drama</NavSubItem>
					<NavSubItem to="/sections/strings">Strings</NavSubItem>
					<NavSubItem to="/sections/woodwind">Woodwind</NavSubItem>
				</NavDropdown>
				<NavItem to="/news">News</NavItem>
				<NavItem to="/contact">Contact</NavItem>
				<NavigationMenu.Indicator className="nav__indicator">
					<div className="nav__indicator-arrow" />
				</NavigationMenu.Indicator>
			</NavigationMenu.List>
			<div className="nav__viewport-position">
				<NavigationMenu.Viewport className="nav__viewport" />
			</div>
			{!isTablet && navCta}
		</NavigationMenu.Root>
	);
};

export default Navigation;
