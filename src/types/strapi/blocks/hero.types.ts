import type { ImageCarouselBlock } from "./image-carousel.types";

interface LinkComponent {
	id: number;
	label: string;
	href: string;
	isExternal: boolean;
}

export interface HeroBlock {
	__component: "blocks.image-carousel";
	id: number;
	heading: string;
	subheading: string;
	cta: LinkComponent[];
	images: ImageCarouselBlock;
}
