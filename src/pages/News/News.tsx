import { useStrapiData } from "@/hooks/useStrapiData";

import BlockRenderer from "@/components/blocks/BlockRenderer";
import LoadingSpinner from "@/components/LoadingSpinner";

import type { Page } from "@/types/strapi";

const PAGE_ID = "ioues4y89uqoot5snsv3e2g5";

const News = function () {
	const { data: content, loading, error } = useStrapiData<Page>("pages", PAGE_ID);

	if (loading) {
		return <LoadingSpinner />;
	}

	if (error) {
		return <div className="error">Error fetching page content: {error}</div>;
	}

	if (!content) {
		return <div className="error">This page has no content.</div>;
	}

	return content.blocks && <BlockRenderer blocks={content.blocks} />;
};

export default News;
