import { useStrapiData } from "@/hooks/useStrapiData";

import Adjudicator from "@/components/Adjudicator";
import BlockRenderer from "@/components/blocks/BlockRenderer";
import Classes from "@/components/Classes";
import ErrorMessage from "@/components/ErrorMessage";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

import type { Section } from "@/types/strapi";

import "../Sections.scss";

import bannerImg from "@/assets/sections/choirs.webp";
import { formatDate } from "@/util/formateDate";

const SECTION_ID = "d6r05nfz15xzy2az3n4f07kl";

const Choirs = function () {
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
				<div className="fb-col-wrapper error">This page section no content.</div>;
			</>
		);
	}

	return (
		<>
			{banner}
			{content.blocks && <BlockRenderer blocks={content.blocks} />}
			{content.classes && <Classes classes={content.classes} />}
			{content.adjudicator && <Adjudicator adjudicator={content.adjudicator} />}
		</>
	);
};

export default Choirs;
