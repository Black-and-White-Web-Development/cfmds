import { usePageData } from "@/hooks/usePageData";

import BlockRenderer from "@/components/blocks/BlockRenderer";

const PAGE_ID = "whtdogqzvhqis9qmjq8itsbd";

const About = function () {
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

	return (
		<>
			<h1>{content.heading || content.title}</h1>
			{content.blocks && <BlockRenderer blocks={content.blocks} />}
		</>
	);
};

export default About;
