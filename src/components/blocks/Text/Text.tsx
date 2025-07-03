import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import type { TextBlock } from "@/types/strapi";
// import "./Text.scss";

interface TextProps {
	block: TextBlock;
}

const Text = ({ block }: TextProps) => {
	return (
		<section className="text">
			<div className="text__content">
				<BlocksRenderer
					content={block.body}
					blocks={{
						paragraph: ({ children }) => <p className="text__paragraph">{children}</p>,
					}}
				/>
			</div>
		</section>
	);
};

export default Text;
