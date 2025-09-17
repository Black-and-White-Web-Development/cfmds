import type { StrapiImage } from "@/types/strapi/common.types";

export interface ImageBlock {
	__component: "blocks.image";
	id: number;
	image: StrapiImage;
	isFullBleed: boolean;
}
