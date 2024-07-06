import { describe, expect, vi, type Mock } from 'vitest';
import { apiFetch } from '@/utils/apiFetch';
import { getQuote } from '@/api/quote.api';
import { mockGetQuoteResponse } from '@mocks/mockGetQuoteResponse';

vi.mock('@/utils/apiFetch', () => ({
	apiFetch: vi.fn(),
}));

describe('getQuote', () => {
	it('fetches quote data successfully', async () => {
		(apiFetch as Mock).mockResolvedValueOnce(mockGetQuoteResponse);

		const result = await getQuote({ symbol: 'IBM' });

		expect(apiFetch).toHaveBeenCalledWith('query?function=GLOBAL_QUOTE&symbol=IBM');
		expect(result).toEqual(mockGetQuoteResponse);
	});

	it('throws an error when fetch fails', async () => {
		(apiFetch as Mock).mockRejectedValueOnce(new Error('Network error'));
		await expect(getQuote({ symbol: 'IBM' })).rejects.toThrow('Failed to fetch quote');
	});
});
