import type { BannerBlock } from "@/types/strapi/blocks/banner.types";

import "./Banner.scss";

interface BannerProps {
	block: BannerBlock;
}

const Banner = ({ block }: BannerProps) => {
	const backgroundImage = block.image && (
		<img
			className="banner__image"
			src={block.image.url}
			alt={block.image.alternativeText || ""}
			width={block.image.width}
			height={block.image.height}
		/>
	);

	return (
		<>
			<section className="block banner">
				{backgroundImage}
				<div className="banner__content-container fb-col-wrapper">
					<div className="banner__content">
						<h1 className="banner__heading">{block.heading}</h1>
						<p className="banner__subheading">{block.subheading}</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default Banner;
