import {
	faClarinet,
	faBookOpenLines,
	faGuitar,
	faMasksTheater as faMasksTheatre,
	faMicrophoneStand,
	faPeopleLine,
	faPiano,
	faPianoKeyboard,
	faShoe,
	faTrumpet,
	faViolin,
} from "@awesome.me/kit-3e90a9788c/icons/classic/light";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { NavigationMenu } from "radix-ui";

import { useBreakpoint } from "@/hooks/useBreakpoint";

import NavCta from "./NavCta";
import NavDropdown from "./NavDropdown";
import NavItem from "./NavItem";
import NavLogo from "./NavLogo";
import NavSubItem from "./NavSubItem";

import "./Navigation.scss";

const Navigation = () => {
	const isTablet = useBreakpoint();

	return (
		<NavigationMenu.Root className={clsx("nav", { "nav--mobile fb-col-wrapper": isTablet })}>
			{!isTablet && <NavLogo />}
			<NavigationMenu.List className="nav__list">
				<NavItem to="/">Home</NavItem>
				<NavItem to="/about">About</NavItem>
				<NavDropdown label="Sections">
					<NavSubItem to="/sections/dance">
						<FontAwesomeIcon className="nav__sub-link-icon" icon={faShoe} />
						Dance
					</NavSubItem>
					<NavSubItem to="/sections/brass">
						<FontAwesomeIcon className="nav__sub-link-icon" icon={faTrumpet} />
						Brass
					</NavSubItem>
					<NavSubItem to="/sections/choirs">
						<FontAwesomeIcon className="nav__sub-link-icon" icon={faPeopleLine} />
						Choirs
					</NavSubItem>
					<NavSubItem to="/sections/classical-guitar">
						<FontAwesomeIcon className="nav__sub-link-icon" icon={faGuitar} />
						Classical Guitar
					</NavSubItem>
					<NavSubItem to="/sections/orchestras-bands-and-percussion">
						<FontAwesomeIcon className="nav__sub-link-icon" icon={faBookOpenLines} />
						Orchestras, Bands & Percussion
					</NavSubItem>
					<NavSubItem to="/sections/organ">
						<FontAwesomeIcon className="nav__sub-link-icon" icon={faPianoKeyboard} />
						Organ
					</NavSubItem>
					<NavSubItem to="/sections/pianoforte">
						<FontAwesomeIcon className="nav__sub-link-icon" icon={faPiano} />
						Pianoforte
					</NavSubItem>
					<NavSubItem to="/sections/singing">
						<FontAwesomeIcon className="nav__sub-link-icon" icon={faMicrophoneStand} />
						Singing
					</NavSubItem>
					<NavSubItem to="/sections/speech-and-drama">
						<FontAwesomeIcon className="nav__sub-link-icon" icon={faMasksTheatre} />
						Speech & Drama
					</NavSubItem>
					<NavSubItem to="/sections/strings">
						<FontAwesomeIcon className="nav__sub-link-icon" icon={faViolin} />
						Strings
					</NavSubItem>
					<NavSubItem to="/sections/woodwind">
						<FontAwesomeIcon className="nav__sub-link-icon" icon={faClarinet} />
						Woodwind
					</NavSubItem>
				</NavDropdown>
				<NavItem to="/news">News</NavItem>
				<NavItem to="/contact">Contact</NavItem>
				<NavigationMenu.Indicator className="nav__indicator">
					<div className="nav__indicator-arrow" />
				</NavigationMenu.Indicator>
			</NavigationMenu.List>
			<div className="nav__viewport-container">
				<NavigationMenu.Viewport className="nav__viewport" />
			</div>
			{!isTablet && <NavCta />}
		</NavigationMenu.Root>
	);
};

export default Navigation;
