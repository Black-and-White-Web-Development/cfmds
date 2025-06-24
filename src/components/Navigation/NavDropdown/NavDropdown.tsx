import { CaretDownIcon, CaretRightIcon } from "@radix-ui/react-icons";
import { NavigationMenu } from "radix-ui";

import { useBreakpoint } from "@/hooks/useBreakpoint";

interface Props {
	label: string;
	children: React.ReactNode;
}

export const NavDropdown = function ({ label, children }: Props) {
	const isMobile = useBreakpoint();

	const caret = isMobile ? (
		<CaretRightIcon className="nav__caret nav__caret--mobile" aria-hidden />
	) : (
		<CaretDownIcon className="nav__caret" aria-hidden />
	);

	return (
		<NavigationMenu.Item className="nav__list-item">
			<NavigationMenu.Trigger className="nav__trigger">
				{label} {caret}
			</NavigationMenu.Trigger>
			<NavigationMenu.Content className="nav__sub-menu-content">
				<ul className="nav__sub-menu-list">{children}</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
	);
};

export default NavDropdown;
