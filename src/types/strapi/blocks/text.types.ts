import type { BlocksContent } from "@strapi/blocks-react-renderer";

export interface TextBlock {
	__component: "blocks.text";
	id: number;
	body: BlocksContent;
}
