import RichTextRenderer from "@/components/blocks/RichTextRenderer";

import type { ChairsWelcomeBlock } from "@/types/strapi/blocks/chairs-welcome.types";

import "./ChairsWelcome.scss";

interface ChairsWelcomeProps {
	block: ChairsWelcomeBlock;
}

const ChairsWelcome = ({ block }: ChairsWelcomeProps) => {
	return (
		<section className="block chairs-welcome">
			<div className="chairs-welcome__image-container">
				<img
					className="chairs-welcome__image"
					src={block.avatar.url}
					alt={block.avatar.alternativeText || "Chair's photo"}
					width={block.avatar.width}
					height={block.avatar.height}
				/>
			</div>
			<div className="chairs-welcome__content">
				<h2>{block.heading}</h2>
				<RichTextRenderer content={block.body} />
			</div>
		</section>
	);
};

export default ChairsWelcome;
