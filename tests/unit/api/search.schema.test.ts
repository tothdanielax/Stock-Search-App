import { describe, test, expect } from 'vitest';
import { GetSearchRequestSchema, GetSearchResponseSchema } from '@/api/search.schema';
import type { GetSearchRequest, GetSearchResponse } from '@/api/search.schema';

describe('GetSearchRequestSchema', () => {
	test('should validate a valid request', () => {
		const validRequest: GetSearchRequest = {
			keywords: 'microsoft',
		};

		const result = GetSearchRequestSchema.safeParse(validRequest);
		expect(result.success).toBe(true);
	});

	test('should not validate an invalid request', () => {
		const invalidRequest = { key: 'invalid' };

		const result = GetSearchRequestSchema.safeParse(invalidRequest);
		expect(result.success).toBe(false);
	});
});

describe('GetSearchResponseSchema', () => {
	const validResponse: GetSearchResponse = {
		bestMatches: [
			{
				'1. symbol': 'MSFT',
				'2. name': 'Microsoft Corporation',
				'3. type': 'Equity',
				'4. region': 'United States',
				'5. marketOpen': '09:30',
				'6. marketClose': '16:00',
				'7. timezone': 'UTC-05',
				'8. currency': 'USD',
				'9. matchScore': '1.0000',
			},
		],
	};

	test('should validate a valid response', () => {
		const result = GetSearchResponseSchema.safeParse(validResponse);
		expect(result.success).toBe(true);
	});

	test('should not validate an invalid response', () => {
		const invalidResponse = {
			bestMatches: [
				{
					'1. symbol': 'MSFT',
					'2. name': 'Microsoft Corporation',
					'3. type': 'Equity',
					'4. region': 'United States',
					'5. marketOpen': '09:30',
					'6. marketClose': '16:00',
					'7. timezone': 'UTC-05',
					'8. currency': 'USD',
				},
			],
		};

		const result = GetSearchResponseSchema.safeParse(invalidResponse);
		expect(result.success).toBe(false);
	});
});
