import { useStrapiData } from "@/hooks/useStrapiData";

import RichTextRenderer from "@/components/blocks/RichTextRenderer";
import ErrorMessage from "@/components/ErrorMessage";
import LoadingSpinner from "@/components/LoadingSpinner";
import NoContent from "@/components/NoContent";

import type { FestivalRules } from "@/types/rule.types";

import "./Rules.scss";

const Rules = function () {
	const { data: data, loading, error } = useStrapiData<FestivalRules>("festival-rules");

	if (loading) return <LoadingSpinner message="Loading Festival rules" />;
	if (error) return <ErrorMessage error={error} message="Error loading rules" />;
	if (!data) return <NoContent message="Content the relevant Section Leader to receive a copy." />;

	return (
		<section className="rules block">
			<h1 className="rules__heading">Rules</h1>
			<ol className="rules__list">
				{data.rules.map((ruleset, i) => (
					<li key={ruleset.id} className="rules__list-item ruleset">
						<h2 className="ruleset__heading">
							<span className="ruleset__number">{i + 1}.</span>
							{ruleset.heading}
						</h2>
						<ol className="ruleset__list">
							{ruleset.rules.map((rule, j) => (
								<li key={rule.id} className="ruleset__list-item">
									<article className="rule">
										<h3 className="rule__heading">
											<span className="rule__number">
												{i + 1}
												{String.fromCharCode(97 + j)}.
											</span>
											{rule.heading}
										</h3>
										<RichTextRenderer content={rule.body} />
									</article>
								</li>
							))}
						</ol>
					</li>
				))}
			</ol>
		</section>
	);
};

export default Rules;
