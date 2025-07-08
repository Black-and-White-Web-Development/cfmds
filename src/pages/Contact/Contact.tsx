import { usePageData } from "@/hooks/usePageData";

import BlockRenderer from "@/components/blocks/BlockRenderer";
// import "./Contact.scss";

const PAGE_ID = "y5bpa1iw6a49u09yi4v6ricl";

const Contact = function () {
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
			<h1>{content.heading}</h1>
			{content.blocks && <BlockRenderer blocks={content.blocks} />}
		</>
	);
};

export default Contact;
