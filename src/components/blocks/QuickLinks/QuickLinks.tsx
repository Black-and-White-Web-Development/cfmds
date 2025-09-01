import { useStrapiData } from "@/hooks/useStrapiData";

import ErrorMessage from "@/components/ErrorMessage";
import LoadingSpinner from "@/components/LoadingSpinner";

import QuickLink from "./QuickLink";

import type { Section } from "@/types/strapi";

import "./QuickLinks.scss";

import brass from "@/assets/sections/brass.webp";
import choirs from "@/assets/sections/choirs.webp";
import classicalGuitar from "@/assets/sections/classical-guitar.webp";
import dance from "@/assets/sections/dance.webp";
import orchestras from "@/assets/sections/orchestras-and-bands.webp";
import organ from "@/assets/sections/organ.webp";
import pianoforte from "@/assets/sections/piano.webp";
import singing from "@/assets/sections/singing.webp";
import speech from "@/assets/sections/speech-and-drama.webp";
import strings from "@/assets/sections/strings.webp";
import woodwind from "@/assets/sections/woodwind.webp";

const sectionImages: Record<string, string> = {
	brass,
	choirs,
	"classical-guitar": classicalGuitar,
	dance,
	"orchestras-bands-and-percussion": orchestras,
	organ,
	pianoforte,
	singing,
	"speech-and-drama": speech,
	strings,
	woodwind,
};

const QuickLinks = () => {
	const { data: sections, loading, error } = useStrapiData<Section[]>("sections");

	if (loading) return <LoadingSpinner />;
	if (error) return <ErrorMessage />;

	return (
		<section className="quick-links block">
			<header className="quick-links__header">
				<h2 className="quick-links__heading">Explore our sections</h2>
			</header>
			<nav className="quick-links__nav">
				<ul className="quick-links__list">
					{sections &&
						sections.map(section => {
							const imageUrl = sectionImages[section.slug] || "";

							return (
								<li key={section.id} className="quick-links__list-item">
									<QuickLink
										href={`/sections/${section.slug}`}
										label={section.title}
										imageUrl={imageUrl}
										dates={section.dates}
										classes={section.classes.length}
									/>
								</li>
							);
						})}
				</ul>
			</nav>
		</section>
	);
};

export default QuickLinks;
