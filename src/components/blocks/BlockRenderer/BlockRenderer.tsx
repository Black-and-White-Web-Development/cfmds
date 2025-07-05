import type { ComponentType } from "react";

import ChairsWelcome from "@/components/blocks/ChairsWelcome";
import FrequentlyAskedQuestions from "@/components/blocks/FrequentlyAskedQuestions";
import Text from "@/components/blocks/Text";
import TextWithImage from "@/components/blocks/TextWithImage";

import type {
	Block,
	ChairsWelcomeBlock,
	FrequentlyAskedQuestionsBlock,
	TextWithImageBlock,
	TextBlock,
} from "@/types/strapi";

interface BlockRendererProps {
	blocks: Block[];
}

type ComponentMap = {
	"blocks.chairs-welcome": ComponentType<{ block: ChairsWelcomeBlock }>;
	"blocks.frequently-asked-questions": ComponentType<{ block: FrequentlyAskedQuestionsBlock }>;
	"blocks.text": ComponentType<{ block: TextBlock }>;
	"blocks.text-with-image": ComponentType<{ block: TextWithImageBlock }>;
};

const componentMap: ComponentMap = {
	"blocks.chairs-welcome": ChairsWelcome,
	"blocks.frequently-asked-questions": FrequentlyAskedQuestions,
	"blocks.text": Text,
	"blocks.text-with-image": TextWithImage,
};

const BlockRenderer = ({ blocks }: BlockRendererProps) => {
	return (
		<>
			{blocks.map(block => {
				const Component = componentMap[block.__component] as ComponentType<{ block: Block }>;

				if (!Component) {
					console.warn(`Unknown block type: ${block.__component}`);
					return null;
				}

				return <Component key={block.id} block={block} />;
			})}
		</>
	);
};

export default BlockRenderer;
