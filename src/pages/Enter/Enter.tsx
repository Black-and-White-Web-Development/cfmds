import { ArrowRightIcon } from "@radix-ui/react-icons";

import "./Enter.scss";

const Enter = function () {
	return (
		<section className="enter">
			<h1 className="enter__heading">Enter the 71st annual festival</h1>
			<p className="enter__description">
				Emtries to the Festival are processed by Play&Perform UK. To enter the Festival, you must
				create and sign in to a Play&Perform account on their website.
			</p>
			<a
				className="enter__link"
				href="https://playandperform.uk/oe/oe_signin.php?pnp_token=ch&initsw=1901"
				target="_blank"
				rel="noopener noreferrer"
			>
				Proceed with entry
				<ArrowRightIcon className="enter__link-icon" />
			</a>
		</section>
	);
};

export default Enter;
