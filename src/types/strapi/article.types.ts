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
	section: {
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
	meta: {
		pagination: {
			page: number;
			pageSize: number;
			pageCount: number;
			total: number;
		};
	};
}
