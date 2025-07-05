export type { ChairsWelcomeBlock } from "./chairs-welcome.types";
export type { FrequentlyAskedQuestionsBlock } from "./frequently-asked-questions.types";
export type { TextWithImageBlock } from "./text-with-image.types";
export type { TextBlock } from "./text.types";

import type { ChairsWelcomeBlock } from "./chairs-welcome.types";
import type { FrequentlyAskedQuestionsBlock } from "./frequently-asked-questions.types";
import type { TextWithImageBlock } from "./text-with-image.types";
import type { TextBlock } from "./text.types";

export type Block =
	| ChairsWelcomeBlock
	| FrequentlyAskedQuestionsBlock
	| TextBlock
	| TextWithImageBlock;
