import type { StrapiImage } from "@/types/strapi/common.types";
import type { BlocksContent } from "@strapi/blocks-react-renderer";

export interface TextWithImageBlock {
	__component: "blocks.text-with-image";
	id: number;
	body: BlocksContent;
	imagePosition: "Left" | "Right";
	isFullBleed: boolean;
	image: StrapiImage;
}
