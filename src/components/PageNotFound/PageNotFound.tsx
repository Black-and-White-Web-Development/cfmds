import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (
		<div>
			<h1>Oh no, this page doesn't exist!</h1>
			<p>
				You can go back to the home page by <Link to="/">clicking here</Link>, though!
			</p>
		</div>
	);
};

export default PageNotFound;
