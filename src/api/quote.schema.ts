import { z } from 'zod';
import { SymbolSchema } from '@/models/symbol';

export const GetQuoteRequestSchema = z.object({
	symbol: SymbolSchema,
});

export type GetQuoteRequest = z.infer<typeof GetQuoteRequestSchema>;

export const GetQuoteResponseSchema = z.object({
	'Global Quote': z.object({
		'01. symbol': z.string(),
		'02. open': z.string(),
		'03. high': z.string(),
		'04. low': z.string(),
		'05. price': z.string(),
		'06. volume': z.string(),
		'07. latest trading day': z.string(),
		'08. previous close': z.string(),
		'09. change': z.string(),
		'10. change percent': z.string(),
	}),
});

export type GetQuoteResponse = z.infer<typeof GetQuoteResponseSchema>;

export type GetQuoteFn = (request: GetQuoteRequest) => Promise<GetQuoteResponse>;
