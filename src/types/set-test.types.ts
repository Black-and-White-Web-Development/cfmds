import type { StrapiDocument } from "@/types/strapi/common.types";

export interface SetTest {
	id: number;
	classNumber: string;
	test: StrapiDocument;
}
