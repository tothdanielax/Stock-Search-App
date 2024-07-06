import { describe, test, expect, vi } from 'vitest';
import * as searchApi from '@/api/search.api';
import { getSearch } from '@/api/search.api';
import { mockGetSearchResponse } from '@mocks/mockGetSearchResponse';

vi.spyOn(searchApi, 'getSearch').mockImplementation(() => Promise.resolve(mockGetSearchResponse));

describe('getSearch', () => {
	test('fetches search data successfully', async () => {
		const result = await getSearch({ keywords: 'tesco' });
		expect(result).toBeDefined();
		expect(result).toEqual(mockGetSearchResponse);
	});
});
