import { useStrapiData } from "@/hooks/useStrapiData";

import Article from "@/components/Article";
import LoadingSpinner from "@/components/LoadingSpinner";

import type { NewsBlock } from "@/types/strapi";
import type { Article as ArticleType } from "@/types/strapi";

import "./News.scss";

interface NewsProps {
	block: NewsBlock;
}

const News = ({ block }: NewsProps) => {
	const { data: content, loading, error } = useStrapiData<ArticleType[]>("articles");

	return (
		<section className="block news">
			<h2 className="news__heading">Latest articles</h2>
			<ul className="news__list">
				{loading ? (
					<LoadingSpinner message="Loading articles" />
				) : error ? (
					<div className="error">Error fetching articles: {error}</div>
				) : !content ? (
					<div className="error">No articles available.</div>
				) : (
					content
						.slice(0, block.maxArticlesNumber)
						.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
						.map(article => (
							<li key={article.id} className="news__list-item">
								<Article article={article} />
							</li>
						))
				)}
			</ul>
		</section>
	);
};

export default News;
