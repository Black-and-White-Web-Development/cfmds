import RichTextRenderer from "@/components/blocks/RichTextRenderer";

import type { Adjudicator as AdjudicatorType } from "@/types/adjudicator.types";

import "./Adjudicator.scss";

interface AdjudicatorProps {
	adjudicator: AdjudicatorType;
}

const Adjudicator = ({ adjudicator }: AdjudicatorProps) => {
	return (
		<section className="adjudicator" id="adjudicator">
			<h2>About our adjudicator</h2>
			<article className="adjudicator__container">
				<header className="adjudicator__header">
					<h3 className="adjudicator__heading">
						{adjudicator.name}
						<span className="adjudicator__post-nominals">{adjudicator.postNominals}</span>
					</h3>
					<img
						className="adjudicator__portrait"
						src={adjudicator.avatar.url}
						alt={`Portrait of ${adjudicator.name}`}
						height={adjudicator.avatar.height}
					/>
				</header>
				<RichTextRenderer content={adjudicator.bio} />
			</article>
		</section>
	);
};

export default Adjudicator;
