import clsx from "clsx";
import { NavigationMenu } from "radix-ui";

import { useBreakpoint } from "@/hooks/useBreakpoint";

import NavDropdown from "./NavDropdown";
import NavItem from "./NavItem";
import "./Navigation.scss";

const Navigation = function () {
	const isMobile = useBreakpoint();

	return (
		<NavigationMenu.Root className={clsx("nav", { "nav--mobile": isMobile })}>
			<NavigationMenu.List className="nav__list">
				<NavItem to="/" name="Home" />
				<NavItem to="/about" name="About" />
				<NavDropdown name="Sections">
					{/* prettier-ignore */}
					<NavItem to="/sections/brass-orchestras-bands-percussion" name="Brass, Orchestras, Bands & Percussion" />
					<NavItem to="/sections/choirs" name="Choirs" />
					<NavItem to="/sections/classical-guitar" name="Classical Guitar" />
					<NavItem to="/sections/dance" name="Dance" />
					<NavItem to="/sections/organ" name="Organ" />
					<NavItem to="/sections/pianoforte" name="Pianoforte" />
					<NavItem to="/sections/singing" name="Singing" />
					<NavItem to="/sections/strings" name="Strings" />
					<NavItem to="/sections/speech-and-drama" name="Speech & Drama" />
					<NavItem to="/sections/woodwind" name="Woodwind" />
				</NavDropdown>
				<NavItem to="/news" name="News" />
				<NavItem to="/contact" name="Contact" />
				<NavItem to="/enter" name="Enter" />
			</NavigationMenu.List>
		</NavigationMenu.Root>
	);
};

export default Navigation;
