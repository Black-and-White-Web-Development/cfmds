import clsx from "clsx";

import type { ImageBlock } from "@/types/strapi/blocks/image.types";

import "./Image.scss";

interface ImageProps {
	block: ImageBlock;
}

const Image = ({ block }: ImageProps) => {
	return (
		<img
			className={clsx("block image", {
				"image--full-bleed": block.isFullBleed,
			})}
			src={block.image.url}
			alt={block.image.alternativeText || ""}
			width={block.image.width}
			height={block.image.height}
		/>
	);
};

export default Image;
