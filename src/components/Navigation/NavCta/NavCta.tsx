import { Link } from "react-router-dom";
import "./NavCta.scss";

const NavCta = () => {
	return (
		<div className="nav-cta nav__cta">
			<Link className="nav-cta__link" to="" style={{ cursor: "not-allowed" }}>
				Entries are closed
			</Link>
		</div>
	);
};

export default NavCta;
