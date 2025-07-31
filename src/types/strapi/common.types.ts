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

export interface StrapiDocument {
	id: number;
	documentId: string;
	name: string;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: string;
	provider: string;
}
