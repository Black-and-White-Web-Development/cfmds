import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { useStrapiData } from "@/hooks/useStrapiData";

import RichTextRenderer from "@/components/blocks/RichTextRenderer";
import Headline from "@/components/Headline";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

import type { Article as ArticleType } from "@/types/strapi/article.types";

import "./Article.scss";

const Article = () => {
	const { documentId } = useParams();

	const { data: articles, loading, error } = useStrapiData<ArticleType[]>("articles");

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error loading article: {error}</div>;
	if (!articles) return <div>No articles available</div>;

	const article = articles.find(a => String(a.documentId) === documentId);

	if (!article) return <div>Article not found</div>;

	const sorted = [...articles].sort(
		(a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
	);

	const currentIndex = sorted.findIndex(a => a.documentId === article.documentId);

	const prevArticle = sorted[currentIndex + 1] || null;
	const nextArticle = sorted[currentIndex - 1] || null;

	return (
		<>
			<section className="article">
				<article className="article__content">
					<header className="article-header">
						<h1 className="article__heading">{article.heading}</h1>
					</header>
					<RichTextRenderer content={article.body} />
				</article>
				<nav className="article__nav">
					{nextArticle && (
						<Link
							to={`/news/${nextArticle.documentId}`}
							className="article__nav-link article__nav-link--next"
						>
							<ArrowLeftIcon className="article__nav-link-icon article__nav-link-icon--next" />
							<span className="article__nav-link-label">Next article</span>
							<span className="article__nav-link-title">{nextArticle.heading}</span>
						</Link>
					)}
					{prevArticle && (
						<Link
							to={`/news/${prevArticle.documentId}`}
							className="article__nav-link article__nav-link--prev"
						>
							<span className="article__nav-link-label">Previous article</span>
							<span className="article__nav-link-title">{prevArticle.heading}</span>
							<ArrowRightIcon className="article__nav-link-icon article__nav-link-icon--previous" />
						</Link>
					)}
				</nav>
				<aside className="article__related related-articles">
					<h2 className="related-articles__heading">Catch up with latest Festival news</h2>
					<ul className="related-articles__list">
						{loading ? (
							<LoadingSpinner message="Loading articles" />
						) : error ? (
							<div className="error">Error fetching articles: {error}</div>
						) : !articles ? (
							<div className="error">No articles available.</div>
						) : (
							sorted
								.slice(0, 4)
								.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
								.map(article => (
									<li key={article.id} className="related-articles__list-item">
										<Headline article={article} showPreivew={false} />
									</li>
								))
						)}
					</ul>
				</aside>
			</section>
		</>
	);
};

export default Article;
