import clsx from "clsx";

import RichTextRenderer from "../RichTextRenderer";

import type { TextWithImageBlock } from "@/types/strapi/blocks/text-with-image.types";
import "./TextWithImage.scss";

interface TextWithImageProps {
	block: TextWithImageBlock;
}

const TextWithImage = ({ block }: TextWithImageProps) => {
  const isLandscape = block.image.width > block.image.height;
  const isPortrait = block.image.width < block.image.height;
	const isSquare = block.image.width === block.image.height;

	const sectionClass = clsx("text-with-image", {
		"text-with-image--left": block.imagePosition.toLowerCase() === "left",
		"text-with-image--right": block.imagePosition.toLowerCase() !== "left",
		"text-with-image--full-bleed": block.isFullBleed,
		"text-with-image--landscape": isLandscape,
		"text-with-image--portrait": isPortrait,
		"text-with-image--square": isSquare,
	});

	return (
		<section className={`block ${sectionClass}`}>
			<div className="text-with-image__image-container">
				<img
					className="text-with-image__image"
					src={block.image.url}
					alt={block.image.alternativeText || ""}
					width={block.image.width}
					height={block.image.height}
				/>
			</div>
			<div className="text-with-image__text">
				<RichTextRenderer content={block.body} />
			</div>
		</section>
	);
};

export default TextWithImage;
