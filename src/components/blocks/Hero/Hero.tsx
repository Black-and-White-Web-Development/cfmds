import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

import HeroCarousel from "./HeroCarousel";

import type { HeroBlock } from "@/types/strapi";
import "./Hero.scss";

interface HeroProps {
	block: HeroBlock;
}

const Hero = ({ block }: HeroProps) => {
	const cta = block.cta.map(cta => (
		<Link key={cta.id} to={cta.href} className="hero__cta">
			{cta.label}
			<ArrowRightIcon className="hero__cta-icon" />
		</Link>
	));

	return (
		<section className="block hero">
			<div className="hero__carousel-container">
				<HeroCarousel block={block.images} />
			</div>
			<div className="hero__content-container fb-col-wrapper">
				<div className="hero__content">
					<h1 className="hero__heading">{block.heading}</h1>
					<p className="hero__subheading">{block.subheading}</p>
					{cta}
				</div>
			</div>
		</section>
	);
};

export default Hero;
