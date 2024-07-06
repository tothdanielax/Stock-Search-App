import * as dailyApi from '@/api/daily.api';
import { describe, expect, vi } from 'vitest';
import { mockGetDailyResponse } from '@mocks/mockGetDailyResponse';
import { getDaily } from '@/api/daily.api';

vi.spyOn(dailyApi, 'getDaily').mockImplementation(() => Promise.resolve(mockGetDailyResponse));

describe('getDaily', () => {
	it('fetches daily data', async () => {
		const result = await getDaily({ symbol: 'IBM' });
		expect(result).toBeDefined();
		expect(result).toEqual(mockGetDailyResponse);
	});
});
