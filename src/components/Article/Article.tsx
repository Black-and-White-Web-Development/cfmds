import RichTextRenderer from "@/components/blocks/RichTextRenderer";

import type { Article as ArticleType } from "@/types/strapi";

import { formatDateShort } from "@/util/formateDate";

import "./Article.scss";

interface ArticleProps {
	article: ArticleType;
}

const Article = ({ article }: ArticleProps) => {
	const sections =
		article.sections.length > 0 ? (
			article.sections.map(section => (
				<li key={section.id} className="article__section">
					{section.title}
				</li>
			))
		) : (
			<li className="article__section article__section--all">All sections</li>
		);

	return (
		<article key={article.id} className="article">
			<header className="article__header">
				<h3 className="article__heading">{article.heading}</h3>
				<div className="article__metadata">
					<time className="article__date" dateTime={article.createdAt}>
						{formatDateShort(article.createdAt)}
					</time>
					<ul className="article__sections">{sections}</ul>
				</div>
			</header>
			<RichTextRenderer content={article.body} />
		</article>
	);
};

export default Article;
