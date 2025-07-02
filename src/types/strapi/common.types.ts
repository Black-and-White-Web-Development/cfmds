export interface StrapiResponse<T> {
	data: T;
	meta: Record<string, unknown>;
}

export interface StrapiImage {
	id: number;
	documentId: string;
	url: string;
	alternativeText: string | null;
	width: number;
	height: number;
}
