import clsx from "clsx";
import { NavigationMenu } from "radix-ui";
import { NavLink, type NavLinkProps } from "react-router-dom";

interface NavItemProps {
	to: string;
	name: string;
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
				clsx("nav__link", { "nav__link--active": isActive, "nav__link--pending": isPending })
			}
		/>
	);
};

const NavItem = function ({ to, name }: NavItemProps) {
	return (
		<NavigationMenu.Item className="nav__list-item">
			<NavigationMenu.Link asChild>
				<RouterNavLink to={to}>{name}</RouterNavLink>
			</NavigationMenu.Link>
		</NavigationMenu.Item>
	);
};

export default NavItem;
