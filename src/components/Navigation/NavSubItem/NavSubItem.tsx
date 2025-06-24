import clsx from "clsx";
import { NavigationMenu } from "radix-ui";
import { NavLink, type NavLinkProps } from "react-router-dom";

interface NavSubItemProps {
	to: string;
	children: React.ReactNode;
}

type RouterNavSubLinkProps = NavLinkProps & {
	ref?: React.Ref<HTMLAnchorElement>;
};

const RouterSubNavLink = (props: RouterNavSubLinkProps) => {
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
		<li className="nav__sub-list-item">
			<NavigationMenu.Link asChild>
				<RouterSubNavLink to={to}>{children}</RouterSubNavLink>
			</NavigationMenu.Link>
		</li>
	);
};

export default NavSubItem;
