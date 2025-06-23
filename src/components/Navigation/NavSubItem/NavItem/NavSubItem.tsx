import type { ReactNode } from "react";

import clsx from "clsx";
import { NavigationMenu } from "radix-ui";
import { NavLink, type NavLinkProps } from "react-router-dom";

interface NavSubItemProps {
	to: string;
	children: ReactNode;
}

type RouterNavLinkProps = NavLinkProps & {
	ref?: React.Ref<HTMLAnchorElement>;
};

const RouterNavLink = (props: RouterNavLinkProps) => {
	const { ref, ...rest } = props;

	return (
		<NavLink
			ref={ref}
			{...rest}
			className={({ isActive, isPending }) =>
				clsx("nav__sub-link", {
					"nav__sub-link--active": isActive,
					"nav__sub-link--pending": isPending,
				})
			}
			end
		/>
	);
};

const NavSubItem = function ({ to, children }: NavSubItemProps) {
	return (
		<NavigationMenu.Link asChild>
			<RouterNavLink to={to}>{children}</RouterNavLink>
		</NavigationMenu.Link>
	);
};

export default NavSubItem;
