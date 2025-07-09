import { usePageData } from "@/hooks/usePageData";

import BlockRenderer from "@/components/blocks/BlockRenderer";

const PAGE_ID = "ioues4y89uqoot5snsv3e2g5";

const News = function () {
	const { content, loading, error } = usePageData(PAGE_ID);

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

export default News;
