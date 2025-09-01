import type { ComponentType } from "react";

import Banner from "@/components/blocks/Banner";
import ChairsWelcome from "@/components/blocks/ChairsWelcome";
import FrequentlyAskedQuestions from "@/components/blocks/FrequentlyAskedQuestions";
import Hero from "@/components/blocks/Hero";
import ImageCarousel from "@/components/blocks/ImageCarousel";
import News from "@/components/blocks/News";
import QuickLinks from "@/components/blocks/QuickLinks";
import Text from "@/components/blocks/Text";
import TextWithImage from "@/components/blocks/TextWithImage";

import type {
	BannerBlock,
	Block,
	ChairsWelcomeBlock,
	FrequentlyAskedQuestionsBlock,
	HeroBlock,
	ImageCarouselBlock,
	NewsBlock,
	QuickLinksBlock,
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
	"blocks.hero": ComponentType<{ block: HeroBlock }>;
	"blocks.image-carousel": ComponentType<{ block: ImageCarouselBlock }>;
	"blocks.news": ComponentType<{ block: NewsBlock }>;
	"blocks.section-quick-links": ComponentType<{ block: QuickLinksBlock }>;
	"blocks.text": ComponentType<{ block: TextBlock }>;
	"blocks.text-with-image": ComponentType<{ block: TextWithImageBlock }>;
};

const componentMap: ComponentMap = {
	"blocks.banner": Banner,
	"blocks.chairs-welcome": ChairsWelcome,
	"blocks.frequently-asked-questions": FrequentlyAskedQuestions,
	"blocks.hero": Hero,
	"blocks.image-carousel": ImageCarousel,
	"blocks.news": News,
	"blocks.section-quick-links": QuickLinks,
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
