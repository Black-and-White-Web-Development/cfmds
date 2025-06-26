import clsx from "clsx";
import { NavigationMenu } from "radix-ui";
import { NavLink, type NavLinkProps } from "react-router-dom";
import "./NavItem.scss";

interface NavItemProps {
	to: string;
	children: React.ReactNode;
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
				clsx("nav__link", {
					"nav__link--active": isActive,
					"nav__link--pending": isPending,
				})
			}
			end
		/>
	);
};

const NavItem = function ({ to, children }: NavItemProps) {
	return (
		<NavigationMenu.Item className="nav__list-item">
			<NavigationMenu.Link asChild>
				<RouterNavLink to={to}>{children}</RouterNavLink>
			</NavigationMenu.Link>
		</NavigationMenu.Item>
	);
};

export default NavItem;
