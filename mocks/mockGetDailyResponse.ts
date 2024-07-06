import type { GetDailyResponse } from '@/api/daily.schema';

export const mockGetDailyResponse: GetDailyResponse = {
	'Meta Data': {
		'1. Information': 'Daily Prices (open, high, low, close) and Volumes',
		'2. Symbol': 'IBM',
		'3. Last Refreshed': '2021-09-30',
		'4. Output Size': 'Compact',
		'5. Time Zone': 'US/Eastern',
	},
	'Time Series (Daily)': {
		'2021-09-30': {
			'1. open': '139.0000',
			'2. high': '139.0000',
			'3. low': '139.0000',
			'4. close': '139.0000',
			'5. volume': '0',
		},
	},
};
