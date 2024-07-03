import { env } from '@/env';

// MVP used only for queries
const BASE_URL = `https://www.alphavantage.co`;

/**
 * Generic function to fetch data from the API, already including the API key as Bearer token and transforming the response to JSON object
 * @param endpoint The endpoint to fetch
 * @param options The options to pass to the fetch function (e.g. query)
 * @returns The response from the fetch
 */
export async function apiFetch<TResult = JSON>(
	endpoint: string,
	options?: RequestInit | undefined,
): Promise<TResult> {
	const response = await fetch(`${BASE_URL}/${endpoint}&apikey=${env.ALPHA_API_KEY}`, {
		...options,
		headers: {
			Accept: 'application/json',
			...options?.headers,
		},
	});

	if (!response.ok) {
		throw new Error(`HTTP error while fetching '${endpoint}'! Status: ${response.status}`);
	}

	return response.json() as Promise<TResult>;
}
