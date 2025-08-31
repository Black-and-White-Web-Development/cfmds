import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";

import NoContent from "@/components/NoContent";

import "./PageNotFound.scss";

const PageNotFound = () => {
	const navigate = useNavigate();

	return (
		<>
			<NoContent
				message="Page not found."
				children={
					<a
						href="/"
						onClick={e => {
							e.preventDefault();
							if (window.history.length > 1) {
								void navigate(-1);
							} else {
								void navigate("/");
							}
						}}
						className="page-not-found__link"
					>
						<ArrowLeftIcon className="page-not-found__icon" />
						Go back
					</a>
				}
			/>
		</>
	);
};

export default PageNotFound;
