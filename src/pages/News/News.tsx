import { useStrapiData } from "@/hooks/useStrapiData";

import BlockRenderer from "@/components/blocks/BlockRenderer";
import ErrorMessage from "@/components/ErrorMessage";
import LoadingSpinner from "@/components/LoadingSpinner";

import type { Page } from "@/types/strapi";

const PAGE_ID = "ioues4y89uqoot5snsv3e2g5";

const News = function () {
	const { data: content, loading, error } = useStrapiData<Page>("pages", PAGE_ID);

	if (loading) {
		return <LoadingSpinner />;
	}

	if (error) {
		return <ErrorMessage message="Error fetching page content." error={error} />;
	}

	if (!content) {
		return <div className="error">This page has no content.</div>;
	}

	return content.blocks && <BlockRenderer blocks={content.blocks} />;
};

export default News;
