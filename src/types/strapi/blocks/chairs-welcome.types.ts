import type { StrapiImage } from "@/types/strapi/common.types";
import type { BlocksContent } from "@strapi/blocks-react-renderer";

export interface ChairsWelcomeBlock {
	__component: "blocks.chairs-welcome";
	id: number;
	blankField: null;
	heading: string;
	body: BlocksContent;
	avatar: StrapiImage;
	signature: null;
}
