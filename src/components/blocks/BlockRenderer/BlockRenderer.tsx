import type { ComponentType } from "react";

import Banner from "@/components/blocks/Banner";
import ChairsWelcome from "@/components/blocks/ChairsWelcome";
import FrequentlyAskedQuestions from "@/components/blocks/FrequentlyAskedQuestions";
import ImageCarousel from "@/components/blocks/ImageCarousel/ImageCarousel";
import Text from "@/components/blocks/Text";
import TextWithImage from "@/components/blocks/TextWithImage";

import type {
	BannerBlock,
	Block,
	ChairsWelcomeBlock,
	FrequentlyAskedQuestionsBlock,
	ImageCarouselBlock,
	TextWithImageBlock,
	TextBlock,
} from "@/types/strapi";

interface BlockRendererProps {
	blocks: Block[];
}

type ComponentMap = {
	"blocks.banner": ComponentType<{ block: BannerBlock }>;
	"blocks.chairs-welcome": ComponentType<{ block: ChairsWelcomeBlock }>;
	"blocks.frequently-asked-questions": ComponentType<{ block: FrequentlyAskedQuestionsBlock }>;
	"blocks.image-carousel": ComponentType<{ block: ImageCarouselBlock }>;
	"blocks.text": ComponentType<{ block: TextBlock }>;
	"blocks.text-with-image": ComponentType<{ block: TextWithImageBlock }>;
};

const componentMap: ComponentMap = {
	"blocks.banner": Banner,
	"blocks.chairs-welcome": ChairsWelcome,
	"blocks.frequently-asked-questions": FrequentlyAskedQuestions,
	"blocks.image-carousel": ImageCarousel,
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
