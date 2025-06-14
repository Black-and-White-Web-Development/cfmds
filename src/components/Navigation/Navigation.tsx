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
				<NavDropdown name="Services">
					<NavItem to="/services/planning" name="Planning" />
					<NavItem to="/services/development" name="Development" />
					<NavItem to="/services/review" name="Review" />
				</NavDropdown>
				<NavItem to="/blog" name="Blog" />
				<NavItem to="/contact" name="Contact" />
			</NavigationMenu.List>
		</NavigationMenu.Root>
	);
};

export default Navigation;
