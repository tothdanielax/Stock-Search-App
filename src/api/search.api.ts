'use server';

import { apiFetch } from '@/utils/apiFetch';
import type { GetSearchFn } from '@/api/search.schema';

// example: https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo
export const getSearch: GetSearchFn = async ({ keywords }) => {
	try {
		const query = new URLSearchParams({
			function: 'SYMBOL_SEARCH',
			keywords,
		});

		return await apiFetch(`query?${query}`);
	} catch {
		throw new Error('Failed to fetch quote');
	}
};
