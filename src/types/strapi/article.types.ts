import type { Block } from "./blocks";
import type { StrapiDocument } from "@/types/strapi/common.types";
import type { BlocksContent } from "@strapi/blocks-react-renderer";

export interface Article {
	id: number;
	documentId: string;
	heading: string;
	body: BlocksContent;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	isPinned: boolean;
	sections: {
		id: number;
		documentId: string;
		title: string;
		slug: string;
		locaiton: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
	}[];
	attachments: StrapiDocument;
	blocks: Block[];
}
