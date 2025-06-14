import { CaretDownIcon, CaretRightIcon } from "@radix-ui/react-icons";
import { NavigationMenu } from "radix-ui";

import { useBreakpoint } from "@/hooks/useBreakpoint";

interface Props {
	name: string;
	children: React.ReactNode;
}

const NavDropdown = function ({ name, children }: Props) {
	const isMobile = useBreakpoint();

	const caret = isMobile ? (
		<CaretRightIcon className="nav__caret nav__caret--mobile" aria-hidden />
	) : (
		<CaretDownIcon className="nav__caret" aria-hidden />
	);

	return (
		<NavigationMenu.Item className="nav__list-item nav__list-item--dropdown">
			<NavigationMenu.Trigger className="nav__trigger">
				{name}
				{caret}
			</NavigationMenu.Trigger>
			<NavigationMenu.Content className="nav__content">
				<NavigationMenu.List className="nav__list nav__list--sub-list">
					{children}
				</NavigationMenu.List>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
	);
};

export default NavDropdown;
