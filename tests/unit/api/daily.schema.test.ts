import { describe, test, expect } from 'vitest';
import { type GetDailyRequest, GetDailyRequestSchema } from '@/api/daily.schema';

describe('GetDailySchema', () => {
	test('should validate a valid filter', () => {
		const validFilter = {
			symbol: 'IBM',
		} as GetDailyRequest;

		const result = GetDailyRequestSchema.safeParse(validFilter);
		expect(result.success).toBe(true);
	});

	test('should not validate a filter with invalid outputsize', () => {
		const invalidFilter = {
			symbol: 'IBM',
			outputsize: 'invalid',
		} as unknown as GetDailyRequest;

		const result = GetDailyRequestSchema.safeParse(invalidFilter);
		expect(result.success).toBe(false);
	});

	test('should not validate a filter without data', () => {
		const invalidFilter = {} as unknown as GetDailyRequest;
		const result = GetDailyRequestSchema.safeParse(invalidFilter);
		expect(result.success).toBe(false);
	});
});
