import type { Block } from './blocks';

export interface Page {
  id: number;
  documentId: string;
  title: string;
  description: string | null;
  slug: string;
  heading: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: Block[];
}