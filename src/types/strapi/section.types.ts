import type { Adjudicator } from "@/types/adjudicator.types";
import type { Class } from "@/types/class.types";
import type { Block } from "@/types/strapi/blocks";
import type { StrapiImage } from "@/types/strapi/common.types";
import type { StrapiDocument } from "@/types/strapi/common.types";
import type { BlocksContent } from "@strapi/blocks-react-renderer";

export interface Section {
	id: number;
	documentId: string;
	title: string;
	slug: string;
	location: string;
	leader: {
		id: number;
		name: string;
		postNominals: string;
		bio: BlocksContent;
		avatar: StrapiImage;
	};
	adjudicator: Adjudicator;
	dates: {
		id: number;
		startDate: string;
		endDate?: string;
	}[];
	setTests: {
		id: number;
		classNumber: string;
		test: StrapiDocument;
	}[];
	classes: Class[];
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	blocks: Block[];
	email: string;
}
