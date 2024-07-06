import { SearchInput, type SearchInputProps } from '../../../common/inputs/SearchInput';
import { useEffect, useState } from 'react';
import { getSearch } from '@/api/search.api';
import type { GetSearchResponse } from '@/api/search.schema';
import { Box } from '@mantine/core';
import { SearchHelpRender } from '@/components/pages/index/SearchForm/SearchHelpRender';

/**
 * Props for the {@link SymbolSearch} component.
 */
export type SymbolSearchProps = Omit<SearchInputProps, 'model'> & {
	onHelpClick: (symbol: string) => void;
};

/**
 * A search input for symbols.
 */
export function SymbolSearch({ value, onHelpClick, ...props }: SymbolSearchProps) {
	const [suggestions, setSuggestions] = useState<GetSearchResponse | undefined>();
	const [debouncedValue, setDebouncedValue] = useState<string>();

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(String(value));
		}, 500);

		return () => {
			clearTimeout(handler);
		};
	}, [value]);

	useEffect(() => {
		if (debouncedValue) {
			getSearch({ keywords: String(debouncedValue) })
				.then((response) => {
					if (response.bestMatches) {
						setSuggestions(response);
					}
				})
				.catch((error) => {
					console.error('Failed to get search suggestions:', error);
				});
		} else {
			setSuggestions(undefined);
		}
	}, [debouncedValue]);

	return (
		<Box w="100%" px={30}>
			<SearchInput model="Symbol" allowReset value={value} {...props} w="100%" />
			{suggestions?.bestMatches && (
				<SearchHelpRender suggestions={suggestions} onClick={onHelpClick} />
			)}
		</Box>
	);
}
