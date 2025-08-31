import type { ReactNode } from "react";

import { faFaceDisappointed } from "@awesome.me/kit-3e90a9788c/icons/classic/light";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./NoContent.scss";

interface NoContentProps {
	message?: string;
	children?: ReactNode;
}

const NoContent = ({ message = "Error", children }: NoContentProps) => {
	return (
		<article className="no-content">
			<FontAwesomeIcon className="no-content__icon" icon={faFaceDisappointed} />
			<p className="no-content__message">{message}</p>
			{children}
		</article>
	);
};

export default NoContent;
