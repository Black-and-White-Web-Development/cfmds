import { Link } from "react-router-dom";

import { areEntriesOpen, getEntryDetails } from "@/util/entries";

import "./NavCta.scss";

const NavCta = () => {
	const entriesOpen = areEntriesOpen();
	const { year } = getEntryDetails();

	return entriesOpen ? (
		<div className="nav-cta nav__cta">
			<Link className="nav-cta__link" to="/enter">
				Entries {year}
			</Link>
		</div>
	) : (
		<div className="nav-cta nav-cta--inactive nav__cta">
			<span className="nav-cta__link nav-cta__link--inactive" role="presentation">
				Entries
			</span>
		</div>
	);
};

export default NavCta;
