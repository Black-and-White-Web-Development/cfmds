import { Link } from "react-router-dom";
import "./NavCta.scss";

const NavCta = () => {
  const entriesOpen = false;

	return entriesOpen ? (
		<div className="nav-cta nav__cta">
			<Link className="nav-cta__link" to="/enter">
				Entries 2026
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
