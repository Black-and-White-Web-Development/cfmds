import RichTextRenderer from "@/components/blocks/RichTextRenderer";

import type { TextBlock } from "@/types/strapi";

interface TextProps {
	block: TextBlock;
}

const Text = ({ block }: TextProps) => {
	return (
		<section className="block text">
			<RichTextRenderer content={block.body} />
		</section>
	);
};

export default Text;
