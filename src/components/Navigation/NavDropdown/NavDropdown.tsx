import { CaretDownIcon, CaretRightIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { NavigationMenu } from "radix-ui";

import { useBreakpoint } from "@/hooks/useBreakpoint";
import "./NavDropdown.scss";

interface Props {
	label: string;
	children: React.ReactNode;
}

export const NavDropdown = function ({ label, children }: Props) {
	const isTablet = useBreakpoint();

	const caret = isTablet ? (
		<CaretRightIcon className="nav-dropdown__caret nav-dropdown__caret--mobile" aria-hidden />
	) : (
		<CaretDownIcon className="nav-dropdown__caret" aria-hidden />
	);

	const dropdownHeader = (
		<header className="nav-dropdown__header">
			<h3 className="nav-dropdown__heading nav-dialog__heading">{label}</h3>
			<NavigationMenu.Link asChild>
				<button
					type="button"
					className="nav-dropdown__close-button nav-dialog__action"
					aria-label="Close dropdown menu"
				>
					Back
					<ArrowLeftIcon />
				</button>
			</NavigationMenu.Link>
		</header>
	);

	return (
		<NavigationMenu.Item className="nav-dropdown nav__list-item">
			<NavigationMenu.Trigger className="nav-dropdown__trigger nav__trigger">
				{label} {caret}
			</NavigationMenu.Trigger>
			<NavigationMenu.Content
				className={clsx("nav-dropdown__content", { "fb-col-wrapper": isTablet })}
			>
				{isTablet && dropdownHeader}
				<ul className="nav-dropdown__list">{children}</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
	);
};

export default NavDropdown;
