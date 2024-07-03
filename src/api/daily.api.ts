'use server';

import { apiFetch } from '@/utils/apiFetch';
import type { GetDailyTimeSeries } from '@/api/daily.schema';

// example: https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo
export const getDailyTimeSeries: GetDailyTimeSeries = async ({ symbol, outputsize }) => {
	try {
		const query = new URLSearchParams({
			function: 'TIME_SERIES_DAILY',
			symbol,
			outputsize: outputsize ?? 'compact',
		});

		return await apiFetch(`query?${query}`);
	} catch {
		throw new Error('Failed to fetch daily time series');
	}
};
