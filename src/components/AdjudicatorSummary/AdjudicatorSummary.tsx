import { faChevronDown } from "@awesome.me/kit-3e90a9788c/icons/classic/light";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { Adjudicator } from "@/types/adjudicator.types";

interface AdjudicatorSummaryProps {
	adjudicators: Adjudicator[];
}

const AdjudicatorSummary = ({ adjudicators }: AdjudicatorSummaryProps) => {
	if (!adjudicators?.length) {
		return null;
	}

	return (
		<article className="content banner__adjudicator-summary adjudicator-summary">
			<h2 className="adjudicator-summary__heading">
				{adjudicators.length === 1 ? "Adjudicator" : "Adjudicators"}
			</h2>
			{adjudicators.map(adjudicator => (
				<p className="adjudicator-summary__name" key={adjudicator.id}>
					{adjudicator.name}
					{adjudicator.postNominals && (
						<span className="adjudicator-summary__post-nominals">{adjudicator.postNominals}</span>
					)}
				</p>
			))}
			<a href="#adjudicator" className="adjudicator-summary__link">
				{adjudicators.length === 1 ? "Read biography" : "Read biographies"}
				<FontAwesomeIcon className="adjudicator-summary__link-icon" icon={faChevronDown} />
			</a>
		</article>
	);
};

export default AdjudicatorSummary;
