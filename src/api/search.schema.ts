import { z } from 'zod';

export const GetSearchRequestSchema = z.object({
	keywords: z.string({
		description: 'A text string of your choice. For example: keywords=microsoft.',
	}),
});

export type GetSearchRequest = z.infer<typeof GetSearchRequestSchema>;

export const GetSearchResponseSchema = z.object({
	bestMatches: z.array(
		z.object({
			'1. symbol': z.string(),
			'2. name': z.string(),
			'3. type': z.string(),
			'4. region': z.string(),
			'5. marketOpen': z.string(),
			'6. marketClose': z.string(),
			'7. timezone': z.string(),
			'8. currency': z.string(),
			'9. matchScore': z.string(),
		}),
	),
});

export type GetSearchResponse = z.infer<typeof GetSearchResponseSchema>;

export type GetSearchFn = (request: GetSearchRequest) => Promise<GetSearchResponse>;
