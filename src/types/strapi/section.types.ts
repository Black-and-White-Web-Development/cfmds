import type { Class } from "../class.types";
import type { Block } from "./blocks";
import type { StrapiImage } from "@/types/strapi/common.types";
import type { BlocksContent } from "@strapi/blocks-react-renderer";

export interface Section {
	id: number;
	documentId: string;
	title: string;
	slug: string;
	location: string;
	leader: {
		name: string;
		postNominals: string;
		bio: BlocksContent;
		avatar: StrapiImage;
	};
	adjudicator: {
		name: string;
		postNominals: string;
		bio: BlocksContent;
		avatar: StrapiImage;
	};
	dates: {
		id: number;
		startDate: string;
		endDate?: string;
	}[];
	classes: Class[];
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	blocks: Block[];
}
