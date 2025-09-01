import { faFaceSpiralEyes } from "@awesome.me/kit-3e90a9788c/icons/classic/light";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ErrorMessage.scss";

interface ErrorMessageProps {
	message?: string;
	error?: string;
}

const ErrorMessage = ({ message = "Error", error = "" }: ErrorMessageProps) => {
	return (
		<article className="error-message">
			<FontAwesomeIcon className="error-message__icon" icon={faFaceSpiralEyes} />
			<p className="error-message__message">{message}</p>
			<p className="error-message__error">{error}</p>
		</article>
	);
};

export default ErrorMessage;
