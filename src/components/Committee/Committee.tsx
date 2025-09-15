import { useStrapiData } from "@/hooks/useStrapiData";

import ErrorMessage from "@/components/ErrorMessage";
import LoadingSpinner from "@/components/LoadingSpinner";
import NoContent from "@/components/NoContent";

import type { Committee as CommitteeType } from "@/types/committee.types";
import type { Section as SectionType } from "@/types/strapi/section.types";

import "./Committee.scss";

const Committee = () => {
	const {
		data: committee,
		loading: committeeLoading,
		error: committeeError,
	} = useStrapiData<CommitteeType>("committee");

	const {
		data: sections,
		loading: sectionsLoading,
		error: sectionsError,
	} = useStrapiData<SectionType[]>("sections");

	if (committeeLoading) return <LoadingSpinner message="Loading Festival Committee" />;
	if (committeeError)
		return <ErrorMessage error={committeeError} message="Error loading Festival Committee" />;
	if (!committee) return <NoContent message="No Committee members found." />;

	if (sectionsLoading) return <LoadingSpinner message="Loading Section Leaders" />;
	if (sectionsError)
		return <ErrorMessage error={sectionsError} message="Error loading Section Leaders" />;
	if (!sections) return <NoContent message="No Section Leaders found." />;

	const sectionLeaders = sections
		?.map(section => ({
			id: section.id,
			title: section.title,
			email: section.email,
			leader: section.leader,
		}))
		.sort((a, b) => a.title.localeCompare(b.title));

	return (
		<section className="block committee">
			<h2 className="committee__heading">Committee</h2>
			<div className="committee__trustees">
				<h3 className="committee__subheading">Patrons</h3>
				<ul className="committee__list">
					{committee.patrons.map(trustee => (
						<li key={trustee.id} className="committee__list-item">
							<article className="committee-member">
								<h4 className="committee-member__heading">
									{trustee.name}
									<span className="committee-member__post-nominals">{trustee.postNominals}</span>
								</h4>
							</article>
						</li>
					))}
				</ul>
			</div>
			<div className="committee__president">
				<h3 className="committee__subheading">President</h3>
				<article className="committee-member">
					<h4 className="committee-member__heading">
						{committee.president.name}
						<span className="committee-member__post-nominals">
							{committee.president.postNominals}
						</span>
					</h4>
				</article>
			</div>
			<div className="committee__vice-presidents">
				<h3 className="committee__subheading">Vice Presidents</h3>
				<ul className="committee__list">
					{committee.vicePresidents.map(vps => (
						<li key={vps.id} className="committee__list-item">
							<article className="committee-member">
								<h4 className="committee-member__heading">
									{vps.name}
									<span className="committee-member__post-nominals">{vps.postNominals}</span>
								</h4>
							</article>
						</li>
					))}
				</ul>
			</div>
			<div className="committee__trustees">
				<h3 className="committee__subheading">Trustees</h3>
				<ul className="committee__list">
					{committee.trustees.map(trustee => (
						<li key={trustee.id} className="committee__list-item">
							<article className="committee-member">
								<h4 className="committee-member__heading">
									{trustee.committeeMember.name}
									<span className="committee-member__role">{trustee.role}</span>
								</h4>
							</article>
						</li>
					))}
				</ul>
			</div>
			<div className="committee__officers">
				<h3 className="committee__subheading">Officers</h3>
				<ul className="committee__list">
					{committee.officers.map(officer => (
						<li key={officer.id} className="committee__list-item">
							<article className="committee-member">
								<h4 className="committee-member__heading">
									{officer.committeeMember.name}
									<span className="committee-member__role">{officer.role}</span>
								</h4>
							</article>
						</li>
					))}
				</ul>
			</div>
			<div className="committee__section-leaders">
				<h3 className="committee__subheading">Section Leaders</h3>
				<ul className="committee__list">
					{sectionLeaders.map(section => (
						<li key={section.id} className="committee__list-item">
							<article className="committee-member">
								<h4 className="committee-member__heading">
									{section.leader.name}
									<span className="committee-member__post-nominals">
										{section.leader.postNominals}
									</span>
									<span className="committee-member__role">{section.title} Section Leader</span>
								</h4>
								<p className="committee-member__email"></p>
							</article>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Committee;
