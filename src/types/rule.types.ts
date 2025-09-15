import type { BlocksContent } from "@strapi/blocks-react-renderer";

export interface FestivalRules {
	id: number;
	documentId: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	rules: Ruleset[];
}

export interface Ruleset {
	id: number;
	heading: string;
	rules: Rule[];
}

export interface Rule {
	id: number;
	heading: string;
	body: BlocksContent;
}
