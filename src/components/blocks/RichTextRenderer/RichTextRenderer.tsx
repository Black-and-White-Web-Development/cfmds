import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import type { BlocksContent } from "@strapi/blocks-react-renderer";
import "./RichTextRenderer.scss";

interface RichTextRendererProps {
	content: BlocksContent;
}

const RichTextRenderer = ({ content }: RichTextRendererProps) => {
	return (
		<div className="text">
			<BlocksRenderer
				content={content}
				blocks={{
					heading: ({ children, level }) => {
						switch (level) {
							case 1:
							case 2:
								return <h2 className="text__heading-2">{children}</h2>;
							case 3:
								return <h3 className="text__heading-3">{children}</h3>;
							case 4:
							case 5:
							case 6:
								return <h4 className="text__heading-4">{children}</h4>;
							default:
								return <h2 className="text__heading-2">{children}</h2>;
						}
					},
					paragraph: ({ children }) => <p className="text__paragraph">{children}</p>,
					list: ({ children, format }) => {
						switch (format) {
							case "unordered":
								return <ul className="text__list text__list--unordered">{children}</ul>;
							case "ordered":
								return <ol className="text__list text__list--ordered">{children}</ol>;
						}
					},
					"list-item": ({ children }) => <li className="text__list-item">{children}</li>,
				}}
			/>
		</div>
	);
};

export default RichTextRenderer;
