import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import clsx from "clsx";

import type { TextWithImageBlock } from "@/types/strapi/blocks/text-with-image.types";
// import "./TextWithImage.scss";

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
		<section className={sectionClass}>
			<div className="text-with-image__content">
				<BlocksRenderer
					content={block.body}
					blocks={{
						paragraph: ({ children }) => <p className="chairs-welcome-paragraph">{children}</p>,
					}}
				/>
			</div>
			<div className="text-with-image__image">
				<img
					src={block.image.url}
					alt={block.image.alternativeText || ""}
					width={block.image.width}
					height={block.image.height}
				/>
			</div>
		</section>
	);
};

export default TextWithImage;
