import RichTextRenderer from "@/components/blocks/RichTextRenderer";

import type { ChairsWelcomeBlock } from "@/types/strapi/blocks/chairs-welcome.types";

import "./ChairsWelcome.scss";

interface ChairsWelcomeProps {
	block: ChairsWelcomeBlock;
}

const ChairsWelcome = ({ block }: ChairsWelcomeProps) => {
	return (
		<section className="chairs-welcome block">
			<h2 className="chairs-welcome__heading">{block.heading}</h2>
			<article className="chairs-welcome__container">
				<header className="chairs-welcome__header">
					<h3 className="chairs-welcome__heading">
						Alan Rodger
						<span className="chairs-welcome__post-nominals">ALCM, LLCM (TD), MISM</span>
					</h3>
					<img
						className="chairs-welcome__portrait"
						src={block.avatar.url}
						alt={block.avatar.alternativeText || "Chair's photo"}
						width={block.avatar.width}
						height={block.avatar.height}
					/>
				</header>
				<RichTextRenderer content={block.body} />
			</article>
		</section>
	);
};

export default ChairsWelcome;
