import { useStrapiData } from "@/hooks/useStrapiData";

import BlockRenderer from "@/components/blocks/BlockRenderer";
import ErrorMessage from "@/components/ErrorMessage";
import LoadingSpinner from "@/components/LoadingSpinner";
import NoContent from "@/components/NoContent";

import type { Page } from "@/types/strapi";

import "./Home.scss";

const PAGE_ID = "p3y7m5baeuhqwx71vjd4i1gu";

const Home = function () {
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

	return content.blocks && <BlockRenderer blocks={content.blocks} />;
};

export default Home;
