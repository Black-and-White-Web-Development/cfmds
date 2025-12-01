import { ArrowRightIcon } from "@radix-ui/react-icons";

import "./Enter.scss";

const Enter = function () {
  const entriesOpen = false;

	return entriesOpen ? (
		<section className="enter">
			<h1 className="enter__heading">Enter the 71st annual festival</h1>
			<div className="enter__description">
				<p className="enter__paragraph">
					Entries to the Festival are processed by Play&Perform UK. To enter the Festival, you must
					create and sign in to a Play&Perform account on their website.
				</p>
				<p className="enter__paragraph">
					Please read our{" "}
					<a href="/rules" className="enter__link">
						Festival rules
					</a>{" "}
					before entering.
				</p>
			</div>
			<a
				className="enter__cta"
				href="https://playandperform.uk/oe/oe_signin.php?pnp_token=ch&initsw=1901"
				target="_blank"
				rel="noopener noreferrer"
			>
				Proceed with entry
				<ArrowRightIcon className="enter__cta-icon" />
			</a>
		</section>
	) : (
		<section className="enter">
			<h1 className="enter__heading">Entries are closed</h1>
			<div className="enter__description">
				<p className="enter__paragraph">
					Entries for the 71st Annual Festival closed on Sunday, 30 November 2025. Entries for the
					72nd Annual Festival will open on 1 September 2026.
				</p>
			</div>
			<a className="enter__cta" href="/">
				Back to home page
				<ArrowRightIcon className="enter__cta-icon" />
			</a>
		</section>
	);
};

export default Enter;
