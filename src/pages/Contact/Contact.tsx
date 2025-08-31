import { useStrapiData } from "@/hooks/useStrapiData";

import BlockRenderer from "@/components/blocks/BlockRenderer";
import LoadingSpinner from "@/components/LoadingSpinner";

import type { Page } from "@/types/strapi";

const PAGE_ID = "y5bpa1iw6a49u09yi4v6ricl";

const Contact = function () {
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

	return (
		<>
			<h1>{content.heading}</h1>
			{content.blocks && <BlockRenderer blocks={content.blocks} />}
		</>
	);
};

export default Contact;
