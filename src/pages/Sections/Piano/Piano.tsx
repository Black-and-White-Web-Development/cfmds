import { useStrapiData } from "@/hooks/useStrapiData";

import BlockRenderer from "@/components/blocks/BlockRenderer";
import Class from "@/components/Class";

import type { Section } from "@/types/strapi";

import "../Sections.scss";

import bannerImg from "@/assets/sections/piano.webp";
import { formatDate } from "@/util/formateDate";

const SECTION_ID = "pv7zj3zag11sm67r37weyr7w";

const Piano = function () {
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
			{content && (
				<section className="section">
					{content.classes && (
						<section className="classes">
							<h2>{content.title} classes</h2>
							<div className="classes__container">
								{content.classes.map(cls => (
									<Class key={cls.number} cls={cls} />
								))}
							</div>
						</section>
					)}
				</section>
			)}
			{content.blocks && <BlockRenderer blocks={content.blocks} />}
		</>
	);
};

export default Piano;
