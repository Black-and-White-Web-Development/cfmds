import { useStrapiData } from "@/hooks/useStrapiData";

import Adjudicator from "@/components/Adjudicator";
import AdjudicatorSummary from "@/components/AdjudicatorSummary";
import BlockRenderer from "@/components/blocks/BlockRenderer";
import Classes from "@/components/Classes";
import ErrorMessage from "@/components/ErrorMessage";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import NoContent from "@/components/NoContent";

import type { Section } from "@/types/strapi";

import "../Sections.scss";

import bannerImg from "@/assets/sections/dance.webp";
import { formatDate } from "@/util/formateDate";

const SECTION_ID = "tkv0djp8zgtcqmflok2b97q4";

const Dance = function () {
	const { data: content, loading, error } = useStrapiData<Section>("sections", SECTION_ID);

	const banner = (
		<section className="block banner banner--tall">
			<img className="banner__image banner--tall__image" src={bannerImg} alt="" />
			<div className="banner__content-container fb-col-wrapper">
				<article className="banner__content">
					{content && (
						<>
							<h1 className="banner__heading">{content.title}</h1>
							{content.dates &&
								content.dates.map(date => (
									<time className="banner__subheading" key={date.id}>
										{formatDate(date.startDate)}
										{date.endDate && ` - ${formatDate(date.endDate)}`}
									</time>
								))}
							<p className="banner__subheading">{content.location}</p>
							{content.leader && (
								<div className="content banner__section-leader section-leader">
									<h2 className="section-leader__heading">Section leader</h2>
									<p className="section-leader__name">
										{content.leader.name}
										{content.leader.postNominals && (
											<span className="section-leader__post-nominals">
												{content.leader.postNominals}
											</span>
										)}
									</p>
									<p className="section-leader__contact">Contact: dance@cfmds.org.uk</p>
								</div>
							)}
							<AdjudicatorSummary adjudicators={content.adjudicators} />
						</>
					)}
				</article>
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
			{content.blocks && <BlockRenderer blocks={content.blocks} />}
			{content.classes && <Classes classes={content.classes} />}
			<Adjudicator adjudicators={content.adjudicators} />
		</>
	);
};

export default Dance;
