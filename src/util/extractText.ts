type TextNode = {
	type: "text";
	text: string;
};

type ElementNode = {
	type: string;
	children?: BodyNode[];
};

type BodyNode = TextNode | ElementNode;

export const extractText = (
	node: BodyNode | BodyNode[] | null | undefined,
	chars = 320
): string => {
	if (!node) return "";

	const getText = (n: BodyNode | BodyNode[]): string => {
		if (Array.isArray(n)) {
			return n.map(getText).join(" ");
		}
		if ("text" in n) {
			return n.text;
		}
		if (n.children) {
			return getText(n.children);
		}
		return "";
	};

	return getText(node).slice(0, chars).trim().replace(/\.$/, "");
};
