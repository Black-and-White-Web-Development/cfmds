import { faFaceDisappointed } from "@awesome.me/kit-3e90a9788c/icons/classic/light";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./NoContent.scss";

interface NoContentProps {
	message?: string;
}

const NoContent = ({ message = "Error" }: NoContentProps) => {
	return (
		<article className="no-content">
			<FontAwesomeIcon className="no-content__icon" icon={faFaceDisappointed} />
			<p className="no-content__message">{message}</p>
		</article>
	);
};

export default NoContent;
