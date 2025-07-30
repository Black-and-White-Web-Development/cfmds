import { useStrapiData } from "@/hooks/useStrapiData";

import RichTextRenderer from "@/components/blocks/RichTextRenderer";

import type { NewsBlock } from "@/types/strapi";
import type { Article } from "@/types/strapi";

interface NewsProps {
	block: NewsBlock;
}

const News = ({ block }: NewsProps) => {
	const { data: content, loading, error } = useStrapiData<Article[]>("articles");

	const articles = loading ? (
		<div className="loading">Loading articles...</div>
	) : error ? (
		<div className="error">Error fetching articles: {error}</div>
	) : !content ? (
		<div className="error">No articles available.</div>
	) : (
		content.slice(0, block.maxArticlesNumber).map(article => (
			<article key={article.id} className="article">
				<h3 className="article__heading">{article.heading}</h3>
				<RichTextRenderer content={article.body} />
			</article>
		))
	);

	return (
		<section className="block news">
			<h2 className="news__heading">Latest articles</h2>
			<div className="articles-contaner">{articles}</div>
		</section>
	);
};

export default News;
