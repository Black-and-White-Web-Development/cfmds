import { useStrapiData } from "@/hooks/useStrapiData";

import Adjudicator from "@/components/Adjudicator";
import BlockRenderer from "@/components/blocks/BlockRenderer";
import Classes from "@/components/Classes";
import ErrorMessage from "@/components/ErrorMessage";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import NoContent from "@/components/NoContent";

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
				<LoadingSpinner message="Loading classes from Play&Perform" />
			</>
		);
	}

	if (error) {
		return (
			<>
				{banner}
				<ErrorMessage message="Error fetching page content." error={error} />;
			</>
		);
	}

	if (!content) {
		return (
			<>
				{banner}
				return <NoContent message="This page section has no content." />;
			</>
		);
	}

	return (
		<>
			{banner}
			{content.classes && <Classes classes={content.classes} />}
			{content.blocks && <BlockRenderer blocks={content.blocks} />}
			{content.adjudicator && <Adjudicator adjudicator={content.adjudicator} />}
		</>
	);
};

export default Strings;
