import type { GetQuoteResponse } from '@/api/quote.schema';

export const mockGetQuoteResponse: GetQuoteResponse = {
	'Global Quote': {
		'01. symbol': 'IBM',
		'02. open': '135.58',
		'03. high': '136.89',
		'04. low': '134.43',
		'05. price': '135.30',
		'06. volume': '2947500',
		'07. latest trading day': '2023-01-27',
		'08. previous close': '135.99',
		'09. change': '-0.69',
		'10. change percent': '-0.5071%',
	},
};
