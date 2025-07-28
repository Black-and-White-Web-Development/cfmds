import RichTextRenderer from "@/components/blocks/RichTextRenderer";

import type { FrequentlyAskedQuestionsBlock } from "@/types/strapi";
import "./FrequentlyAskedQuestions.scss";

interface FrequentlyAskedQuestionsProps {
	block: FrequentlyAskedQuestionsBlock;
}

const FrequentlyAskedQuestions = ({ block }: FrequentlyAskedQuestionsProps) => {
	return (
		<section className="block faqs">
			{block.faq.map(item => (
				<div key={item.id} className="faqs__item">
					<h3 className="faqs__question">{item.question}</h3>
					<div className="faqs__answer">
						<RichTextRenderer content={item.answer} />
					</div>
				</div>
			))}
		</section>
	);
};

export default FrequentlyAskedQuestions;
