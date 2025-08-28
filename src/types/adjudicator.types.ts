import type { StrapiImage } from "@/types/strapi/common.types";
import type { BlocksContent } from "@strapi/blocks-react-renderer";

export interface Adjudicator {
	id: number;
	name: string;
	postNominals: string;
	bio: BlocksContent;
	avatar: StrapiImage;
}
