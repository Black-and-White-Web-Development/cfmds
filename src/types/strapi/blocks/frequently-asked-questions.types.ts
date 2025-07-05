import type { BlocksContent } from "@strapi/blocks-react-renderer";

export interface FAQItem {
	id: number;
	question: string;
	answer: BlocksContent;
}

export interface FrequentlyAskedQuestionsBlock {
	__component: "blocks.frequently-asked-questions";
	id: number;
	faq: FAQItem[];
}
