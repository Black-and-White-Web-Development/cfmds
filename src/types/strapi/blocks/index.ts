export type { BannerBlock } from "./banner.types";
export type { ChairsWelcomeBlock } from "./chairs-welcome.types";
export type { FrequentlyAskedQuestionsBlock } from "./frequently-asked-questions.types";
export type { ImageCarouselBlock } from "./image-carousel.types";
export type { TextWithImageBlock } from "./text-with-image.types";
export type { TextBlock } from "./text.types";

import type { BannerBlock } from "./banner.types";
import type { ChairsWelcomeBlock } from "./chairs-welcome.types";
import type { FrequentlyAskedQuestionsBlock } from "./frequently-asked-questions.types";
import type { ImageCarouselBlock } from "./image-carousel.types";
import type { TextWithImageBlock } from "./text-with-image.types";
import type { TextBlock } from "./text.types";

export type Block =
	| BannerBlock
	| ChairsWelcomeBlock
	| FrequentlyAskedQuestionsBlock
	| ImageCarouselBlock
	| TextBlock
	| TextWithImageBlock;
