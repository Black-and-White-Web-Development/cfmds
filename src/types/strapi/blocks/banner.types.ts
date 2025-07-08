import type { StrapiImage } from "@/types/strapi/common.types";

export interface BannerBlock {
	__component: "blocks.banner";
	id: number;
	heading: string;
	subheading: string;
	image: StrapiImage;
}
