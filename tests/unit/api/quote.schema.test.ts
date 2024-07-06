import { describe, test, expect } from 'vitest';
import { GetQuoteRequestSchema, GetQuoteResponseSchema } from '@/api/quote.schema';

describe('GetQuoteRequestSchema', () => {
	test('should validate a valid request', () => {
		const validRequest = {
			symbol: 'IBM',
		};

		const result = GetQuoteRequestSchema.safeParse(validRequest);
		expect(result.success).toBe(true);
	});

	test('should not validate a request without a symbol', () => {
		const invalidRequest = {};

		const result = GetQuoteRequestSchema.safeParse(invalidRequest);
		expect(result.success).toBe(false);
	});

	test('should not validate a request with a non-string symbol', () => {
		const invalidRequest = {
			symbol: 123,
		};

		const result = GetQuoteRequestSchema.safeParse(invalidRequest);
		expect(result.success).toBe(false);
	});
});

describe('GetQuoteResponseSchema', () => {
	test('should validate a valid response', () => {
		const validResponse = {
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

		const result = GetQuoteResponseSchema.safeParse(validResponse);
		expect(result.success).toBe(true);
	});

	test('should not validate a response with missing fields', () => {
		const invalidResponse = {
			'Global Quote': {
				'01. symbol': 'IBM',
				// Missing other required fields
			},
		};

		const result = GetQuoteResponseSchema.safeParse(invalidResponse);
		expect(result.success).toBe(false);
	});

	test('should not validate a response with incorrect field types', () => {
		const invalidResponse = {
			'Global Quote': {
				'01. symbol': 'IBM',
				'02. open': 135.58, // Should be a string
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

		const result = GetQuoteResponseSchema.safeParse(invalidResponse);
		expect(result.success).toBe(false);
	});
});
