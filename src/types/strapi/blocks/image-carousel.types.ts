import type { StrapiImage } from "@/types/strapi/common.types";

export interface ImageCarouselBlock {
	__component: "blocks.image-carousel";
	id: number;
	autoPlay: boolean;
	showControls: boolean;
	isFullBleed: boolean;
	intervalTime: number;
	images: StrapiImage[];
}
