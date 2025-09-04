import { useEffect, useState } from "react";

import type { StrapiResponse } from "@/types/strapi";

interface UseStrapiDataResult<T> {
	data: T | null;
	loading: boolean;
	error: string | null;
}

export const useStrapiData = <T>(
	endpoint: "articles" | "pages" | "sections" | "announcement",
	documentId?: string
): UseStrapiDataResult<T> => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				setError(null);

				const API_URL = `${import.meta.env.VITE_CMS_URL as string}/api/${endpoint}${
					documentId ? `/${documentId}` : ""
				}`;
				const API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN as string;

				const response = await fetch(API_URL, {
					headers: {
						Authorization: `Bearer ${API_TOKEN}`,
						"Content-Type": "application/json",
					},
				});

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const json = (await response.json()) as StrapiResponse<T>;
				setData(json.data);
			} catch (err) {
				console.error("Error fetching data:", err);
				setError(err instanceof Error ? err.message : "An error occurred");
			} finally {
				setLoading(false);
			}
		};

		void fetchData();
	}, [endpoint, documentId]);

	return { data, loading, error };
};
