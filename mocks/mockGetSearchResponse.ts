import type { GetSearchResponse } from '@/api/search.schema';

export const mockGetSearchResponse: GetSearchResponse = {
	bestMatches: [
		{
			'1. symbol': 'TSCO.LON',
			'2. name': 'Tesco PLC',
			'3. type': 'Equity',
			'4. region': 'United Kingdom',
			'5. marketOpen': '08:00',
			'6. marketClose': '16:30',
			'7. timezone': 'UTC+01',
			'8. currency': 'GBP',
			'9. matchScore': '1.0000',
		},
	],
};
