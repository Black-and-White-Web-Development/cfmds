import { Link } from "react-router-dom";

import type { Article as ArticleType } from "@/types/strapi";

import { extractText } from "@/util/extractText";
import { formatDateShort } from "@/util/formateDate";

import "./Headline.scss";

interface ArticleProps {
	article: ArticleType;
	showPreivew?: boolean;
}

const Headline = ({ article, showPreivew = true }: ArticleProps) => {
	const sections =
		article.sections.length > 0 ? (
			article.sections.map(section => (
				<li key={section.id} className="headline__section">
					{section.title}
				</li>
			))
		) : (
			<li className="headline__section headline__section--all">All sections</li>
		);

	return (
		<article key={article.id} className="headline">
			<Link className="headline__link" to={`/news/${article.documentId}`}>
				<header className="headline__header">
					<h3 className="headline__heading">{article.heading}</h3>
					<div className="headline__metadata">
						<time className="headline__date" dateTime={article.createdAt}>
							{formatDateShort(article.createdAt)}
						</time>
						<ul className="headline__sections">{sections}</ul>
					</div>
				</header>
				{showPreivew && <p className="headline__preview">{extractText(article.body)}...</p>}
			</Link>
		</article>
	);
};

export default Headline;
