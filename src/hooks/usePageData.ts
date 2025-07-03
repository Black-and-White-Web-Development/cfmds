import { useEffect, useState } from "react";

import type { Page, StrapiResponse } from "@/types/strapi";

interface UsePageDataResult {
	content: Page | null;
	loading: boolean;
	error: string | null;
}

export const usePageData = (documentId: string): UsePageDataResult => {
	const [content, setContent] = useState<Page | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				setError(null);

				const API_URL = `${import.meta.env.VITE_CMS_URL as string}/api/pages/${documentId}`;
				const API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN as string;

				const response = await fetch(API_URL, {
					method: "GET",
					headers: {
						Authorization: `Bearer ${API_TOKEN}`,
						"Content-Type": "application/json",
					},
				});

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data = (await response.json()) as StrapiResponse<Page>;
				setContent(data.data);
			} catch (error) {
				console.error("Error fetching data:", error);
				setError(error instanceof Error ? error.message : "An error occurred");
			} finally {
				setLoading(false);
			}
		};

		void fetchData();
	}, [documentId]);

	return { content, loading, error };
};
