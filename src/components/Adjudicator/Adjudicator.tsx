import RichTextRenderer from "@/components/blocks/RichTextRenderer";

import type { Adjudicator as AdjudicatorType } from "@/types/adjudicator.types";

import "./Adjudicator.scss";

interface AdjudicatorProps {
	adjudicators: AdjudicatorType[];
}

const Adjudicator = ({ adjudicators }: AdjudicatorProps) => {
	if (!adjudicators?.length) {
		return null;
	}

	return (
		<section className="adjudicator" id="adjudicator">
			<h2>{adjudicators.length === 1 ? "About our adjudicator" : "About our adjudicators"}</h2>
			{adjudicators.map(adjudicator => (
				<article className="adjudicator__container" key={adjudicator.id}>
					<header className="adjudicator__header">
						<h3 className="adjudicator__heading">
							{adjudicator.name}
							<span className="adjudicator__post-nominals">{adjudicator.postNominals}</span>
						</h3>
						{adjudicator.avatar && (
							<img
								className="adjudicator__portrait"
								src={adjudicator.avatar.url}
								alt={`Portrait of ${adjudicator.name}`}
								height={adjudicator.avatar.height}
							/>
						)}
					</header>
					<RichTextRenderer content={adjudicator.bio} />
				</article>
			))}
		</section>
	);
};

export default Adjudicator;
