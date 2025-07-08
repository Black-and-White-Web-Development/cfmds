import type { BannerBlock } from "@/types/strapi/blocks/banner.types";

// import "./BannerBlock.scss";

interface BannerProps {
	block: BannerBlock;
}

const Banner = ({ block }: BannerProps) => {
	return (
		<section className="block banner">
			<div className="banner__image-container">
				<img
					className="banner__image"
					src={block.image.url}
					alt={block.image.alternativeText || ""}
					width={block.image.width}
					height={block.image.height}
				/>
			</div>
			<div className="banner__content">
				<h1>{block.heading}</h1>
				<p>{block.subheading}</p>
			</div>
		</section>
	);
};

export default Banner;
