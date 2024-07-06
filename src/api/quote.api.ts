'use server';

import { apiFetch } from '@/utils/apiFetch';
import type { GetQuoteFn } from '@/api/quote.schema';

// example: https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo
export const getQuote: GetQuoteFn = async ({ symbol }) => {
	try {
		const query = new URLSearchParams({
			function: 'GLOBAL_QUOTE',
			symbol,
		});

		return await apiFetch(`query?${query}`);
	} catch {
		throw new Error('Failed to fetch quote');
	}
};
