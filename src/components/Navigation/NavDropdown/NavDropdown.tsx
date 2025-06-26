import { CaretDownIcon, CaretRightIcon } from "@radix-ui/react-icons";
import { NavigationMenu } from "radix-ui";

import { useBreakpoint } from "@/hooks/useBreakpoint";
import "./NavDropdown.scss";

interface Props {
	label: string;
	children: React.ReactNode;
}

export const NavDropdown = function ({ label, children }: Props) {
	const isMobile = useBreakpoint();

	const caret = isMobile ? (
		<CaretRightIcon className="nav-dropdown__caret nav-dropdown__caret--mobile" aria-hidden />
	) : (
		<CaretDownIcon className="nav-dropdown__caret" aria-hidden />
	);

	return (
		<NavigationMenu.Item className="nav-dropdown nav__list-item">
			<NavigationMenu.Trigger className="nav-dropdown__trigger nav__trigger">
				{label} {caret}
			</NavigationMenu.Trigger>
			<NavigationMenu.Content className="nav-dropdown__content">
				<ul className="nav-dropdown__list">{children}</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
	);
};

export default NavDropdown;
