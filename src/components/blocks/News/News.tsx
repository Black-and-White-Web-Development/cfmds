import { clsx } from "clsx";

import { useStrapiData } from "@/hooks/useStrapiData";

import ErrorMessage from "@/components/ErrorMessage";
import Headline from "@/components/Headline";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import NoContent from "@/components/NoContent";

import type { NewsBlock } from "@/types/strapi";
import type { Article as ArticleType } from "@/types/strapi";

import "./News.scss";

interface NewsProps {
	block: NewsBlock;
	isSummary?: boolean;
}

const News = ({ block, isSummary = true }: NewsProps) => {
	const { data: content, loading, error } = useStrapiData<ArticleType[]>("articles");

	return (
		<section className={clsx("block news", { "news--summary": isSummary })}>
			<h2 className="news__heading">Latest news articles</h2>
			<ul className="news__list">
				{loading ? (
					<LoadingSpinner message="Loading articles" />
				) : error ? (
					<ErrorMessage message="Error fetching news articles." error={error} />
				) : !content ? (
					<NoContent message="No articles available." />
				) : (
					content
						.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
						.slice(0, block.maxArticlesNumber)
						.map(article => (
							<li key={article.id} className="news__list-item">
								<Headline article={article} />
							</li>
						))
				)}
			</ul>
		</section>
	);
};

export default News;
