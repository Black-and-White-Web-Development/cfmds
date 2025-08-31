import { useStrapiData } from "@/hooks/useStrapiData";

import BlockRenderer from "@/components/blocks/BlockRenderer";
import ErrorMessage from "@/components/ErrorMessage";
import LoadingSpinner from "@/components/LoadingSpinner";
import NoContent from "@/components/NoContent";

import type { Page } from "@/types/strapi";

const PAGE_ID = "y5bpa1iw6a49u09yi4v6ricl";

const Contact = function () {
	const { data: content, loading, error } = useStrapiData<Page>("pages", PAGE_ID);

	if (loading) {
		return <LoadingSpinner />;
	}

	if (error) {
		return <ErrorMessage message="Error fetching page content." error={error} />;
	}

	if (!content) {
		return <NoContent message="This page has no content." />;
	}

	return (
		<>
			<h1>{content.heading}</h1>
			{content.blocks && <BlockRenderer blocks={content.blocks} />}
		</>
	);
};

export default Contact;
