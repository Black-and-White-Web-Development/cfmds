import { Link } from "react-router-dom";
import "./NavCta.scss";

const NavCta = () => {
	return (
		<div className="nav-cta nav__cta">
			<Link className="nav-cta__link" to="/enter">
				Entries 2026
			</Link>
		</div>
	);
};

export default NavCta;
