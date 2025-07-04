import clsx from "clsx";

import RichTextRenderer from "../RichTextRenderer";

import type { TextWithImageBlock } from "@/types/strapi/blocks/text-with-image.types";
import "./TextWithImage.scss";

interface TextWithImageProps {
	block: TextWithImageBlock;
}

const TextWithImage = ({ block }: TextWithImageProps) => {
	const sectionClass = clsx("text-with-image", {
		"text-with-image--left": block.imagePosition.toLowerCase() === "left",
		"text-with-image--right": block.imagePosition.toLowerCase() !== "left",
		"text-with-image--full-bleed": block.isFullBleed,
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
