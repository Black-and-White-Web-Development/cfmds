import { useStrapiData } from "@/hooks/useStrapiData";

import BlockRenderer from "@/components/blocks/BlockRenderer";
import Classes from "@/components/Classes";

import type { Section } from "@/types/strapi";

import "../Sections.scss";

import bannerImg from "@/assets/sections/strings.webp";
import { formatDate } from "@/util/formateDate";

const SECTION_ID = "oxh93sex8xsf57n1yjvzt7ha";

const Strings = function () {
	const { data: content, loading, error } = useStrapiData<Section>("sections", SECTION_ID);

	const banner = (
		<section className="block banner">
			<img className="banner__image" src={bannerImg} alt="" />
			<div className="banner__content-container fb-col-wrapper">
				<div className="banner__content">
					{content && (
						<>
							<h1 className="banner__heading">{content.title}</h1>
							{content.dates &&
								content.dates.map(date => (
									<p className="banner__subheading" key={date.id}>
										{formatDate(date.startDate)}
										{date.endDate && ` - ${formatDate(date.endDate)}`}
									</p>
								))}
							<p className="banner__subheading">{content.location}</p>
						</>
					)}
				</div>
			</div>
		</section>
	);

	if (loading) {
		return (
			<>
				{banner}
				<div className="fb-col-wrapper loading">Loading section data...</div>;
			</>
		);
	}

	if (error) {
		return (
			<>
				{banner}
				<div className="fb-col-wrapper error">Error fetching section content: {error}</div>;
			</>
		);
	}

	if (!content) {
		return (
			<>
				{banner}
				<div className="fb-col-wrapper error">This page section no content.</div>;
			</>
		);
	}

	return (
		<>
			{banner}
			{content.classes && <Classes classes={content.classes} />}
			{content.blocks && <BlockRenderer blocks={content.blocks} />}
		</>
	);
};

export default Strings;
