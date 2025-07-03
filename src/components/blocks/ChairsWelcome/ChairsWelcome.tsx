import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import type { ChairsWelcomeBlock } from "@/types/strapi/blocks/chairs-welcome.types";

interface ChairsWelcomeProps {
	block: ChairsWelcomeBlock;
}

const ChairsWelcome = ({ block }: ChairsWelcomeProps) => {
	return (
		<section className="chairs-welcome">
			<div className="chairs-welcome__content">
				<h2>{block.heading}</h2>
				<BlocksRenderer content={block.body} />
			</div>
			{block.avatar && (
				<div className="chairs-welcome__avatar">
					<img
						src={block.avatar.url}
						alt={block.avatar.alternativeText || "Chair's photo"}
						width={block.avatar.width}
						height={block.avatar.height}
					/>
				</div>
			)}
		</section>
	);
};

export default ChairsWelcome;
