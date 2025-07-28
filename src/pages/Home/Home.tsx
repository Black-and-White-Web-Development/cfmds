import { useStrapiData } from "@/hooks/useStrapiData";

import BlockRenderer from "@/components/blocks/BlockRenderer";

import type { Page } from "@/types/strapi";

import "./Home.scss";

const PAGE_ID = "p3y7m5baeuhqwx71vjd4i1gu";

const Home = function () {
	const { data: content, loading, error } = useStrapiData<Page>("pages", PAGE_ID);

	if (loading) {
		return <div className="loading">Loading page content...</div>;
	}

	if (error) {
		return <div className="error">Error fetching page content: {error}</div>;
	}

	if (!content) {
		return <div className="error">This page has no content.</div>;
	}

	return content.blocks && <BlockRenderer blocks={content.blocks} />;
};

export default Home;
