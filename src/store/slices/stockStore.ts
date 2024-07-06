import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { isBrowser } from '@/utils/isBrowser';

const SELECTED_STOCK_LOCAL_STORAGE_KEY = 'selectedStock';

/**
 * Retrieves the initial state from local storage.
 */
const getInitialState = (): {
	selectedStockSymbol: string | undefined;
} => {
	if (!isBrowser()) return { selectedStockSymbol: undefined };

	const storedState = localStorage.getItem(SELECTED_STOCK_LOCAL_STORAGE_KEY);
	if (storedState) {
		try {
			const parsedState = JSON.parse(storedState) as { selectedStockSymbol: string | undefined };
			return {
				selectedStockSymbol: parsedState.selectedStockSymbol?.toUpperCase(),
			};
		} catch (error) {
			console.error('Failed to parse stored state from local storage:', error);
		}
	}
	return { selectedStockSymbol: undefined };
};

const initialState = getInitialState();

/**
 * Interface for {@link useStockStore}.
 */
export type StockStore = {
	selectedStockSymbol: string | undefined;
	resetSelectedStockSymbol: () => void;
	setSelectedStockSymbol: (symbol: string) => void;
};

/**
 * Store associated with Stocks.
 */
export const useStockStore = create<StockStore>()(
	persist(
		(set) => ({
			selectedStockSymbol: initialState.selectedStockSymbol,
			resetSelectedStockSymbol: () => {
				set({ selectedStockSymbol: undefined });
				if (isBrowser()) {
					localStorage.removeItem(SELECTED_STOCK_LOCAL_STORAGE_KEY);
				}
			},
			setSelectedStockSymbol: (symbol: string) => {
				const upperCaseSymbol = symbol.toUpperCase();
				set({ selectedStockSymbol: upperCaseSymbol });
				if (isBrowser()) {
					localStorage.setItem(SELECTED_STOCK_LOCAL_STORAGE_KEY, JSON.stringify(upperCaseSymbol));
				}
			},
		}),
		{
			name: SELECTED_STOCK_LOCAL_STORAGE_KEY,
			skipHydration: true,
		},
	),
);
