import { useStrapiData } from "@/hooks/useStrapiData";

import Article from "@/components/Article";

import type { NewsBlock } from "@/types/strapi";
import type { Article as ArticleType } from "@/types/strapi";

interface NewsProps {
	block: NewsBlock;
}

const News = ({ block }: NewsProps) => {
	const { data: content, loading, error } = useStrapiData<ArticleType[]>("articles");

	const articles = loading ? (
		<div className="loading">Loading articles...</div>
	) : error ? (
		<div className="error">Error fetching articles: {error}</div>
	) : !content ? (
		<div className="error">No articles available.</div>
	) : (
		content
			.slice(0, block.maxArticlesNumber)
			.map(article => <Article key={article.id} article={article} />)
	);

	return (
		<section className="block news">
			<h2 className="news__heading">Latest articles</h2>
			<div className="articles-contaner">{articles}</div>
		</section>
	);
};

export default News;
