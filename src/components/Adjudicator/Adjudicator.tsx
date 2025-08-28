import RichTextRenderer from "@/components/blocks/RichTextRenderer";

import type { Adjudicator as AdjudicatorType } from "@/types/adjudicator.types";

import "./Adjudicator.scss";

interface AdjudicatorProps {
	adjudicator: AdjudicatorType;
}

const Adjudicator = ({ adjudicator }: AdjudicatorProps) => {
	return (
		<section className="adjudicator">
			<h2>About our adjudicator</h2>
			<div className="adjudicator__container">
				<header className="adjudicator__header">
					<h3 className="adjudicator__heading">
						{adjudicator.name}
						<span className="adjudicator__post-nominals">{adjudicator.postNominals}</span>
					</h3>
					<img
						className="adjudicator__portrait"
						src={adjudicator.avatar.url}
						alt={adjudicator.avatar.alternativeText}
						width={adjudicator.avatar.width}
						height={adjudicator.avatar.height}
					/>
				</header>
				<RichTextRenderer content={adjudicator.bio} />
			</div>
		</section>
	);
};

export default Adjudicator;
