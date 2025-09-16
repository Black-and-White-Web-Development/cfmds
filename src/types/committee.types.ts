import type { StrapiImage } from "./strapi";
import type { BlocksContent } from "@strapi/blocks-react-renderer";

export interface Committee {
	id: number;
	documentId: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	trustees: Member[];
	officers: Member[];
	patrons: HonMember[];
	president: HonMember;
	vicePresidents: HonMember[];
}

export interface HonMember {
	id: number;
	name: string;
	postNominals: string;
}

export interface Member {
	id: number;
	role: string;
	committeeMember: CommitteMember;
}

export interface CommitteMember {
	id: number;
	postNominals: string;
	name: string;
	bio: BlocksContent;
	avatar: StrapiImage;
}
