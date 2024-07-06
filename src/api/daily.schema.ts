import { z } from 'zod';
import { SymbolSchema } from '@/models/symbol';

export const GetDailyRequestSchema = z.object({
	symbol: SymbolSchema,
	outputsize: z.enum(['compact', 'full']).optional(),
});

export type GetDailyRequest = z.infer<typeof GetDailyRequestSchema>;

export const GetDailyResponseSchema = z.object({
	'Meta Data': z.object({
		'1. Information': z.string(),
		'2. Symbol': z.string(),
		'3. Last Refreshed': z.string(),
		'4. Output Size': z.string(),
		'5. Time Zone': z.string(),
	}),
	'Time Series (Daily)': z.record(
		z.object({
			'1. open': z.string(),
			'2. high': z.string(),
			'3. low': z.string(),
			'4. close': z.string(),
			'5. volume': z.string(),
		}),
	),
});

export type GetDailyResponse = z.infer<typeof GetDailyResponseSchema>;

export type GetDailyFn = (request: GetDailyRequest) => Promise<GetDailyResponse>;
