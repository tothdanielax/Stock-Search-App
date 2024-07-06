'use client';

import { useCallback, useState, useTransition } from 'react';
import { useQuery } from '@/hooks/useQuery';
import { Box, Flex, Skeleton } from '@mantine/core';
import { QuoteSearchForm } from '@/components/pages/index/SearchForm/QuoteSearchForm';
import { useForm, zodResolver } from '@mantine/form';
import { type GetQuoteResponse } from '@/api/quote.schema';
import { getQuote } from '@/api/quote.api';
import {
	QuoteSearchFormSchema,
	type QuoteSearchFormType,
} from '@/components/pages/index/SearchForm/quoteSearchForm.schema';
import { useStockStore } from '@/store/slices/stockStore';
import { QuoteRender } from '@/components/common/QuoteRender';

/**
 * Skeleton that is rendered during the loading of the dropdown.
 */
function DropdownSkeleton() {
	return (
		<Box h="full" w="full">
			<Skeleton height={8} radius="xl" />
			<Skeleton height={8} mt={6} radius="xl" />
			<Skeleton height={8} mt={6} width="70%" radius="xl" />
		</Box>
	);
}

/**
 * Home/Landing page of the app.
 */
export default function IndexPage() {
	const query = useQuery();
	const stockStore = useStockStore();
	const quoteSearchForm = useForm({
		mode: 'controlled',
		name: 'quoteSearchForm',
		initialValues: {
			symbol: query.get('symbol') ?? '',
		},
		validate: zodResolver(QuoteSearchFormSchema),
	});

	const [searchResults, setSearchResults] = useState<GetQuoteResponse | undefined>();
	const [isPending, startTransition] = useTransition();

	/**
	 * Handler for the search button. It fires when the user clicks the search button or presses enter.
	 */
	const handleSubmit = async (values: QuoteSearchFormType) => {
		query.set('symbol', values.symbol);

		startTransition(async () => {
			const apiResults = await getQuote({
				symbol: values.symbol,
			});
			setSearchResults(apiResults);
			stockStore.setSelectedStockSymbol(values.symbol);
		});
	};

	/**
	 * Handler for the reset button. It resets the form and clears the query.
	 */
	const handleReset = useCallback(() => {
		quoteSearchForm.reset();
		query.resetAll();
	}, [quoteSearchForm, query]);

	return (
		<Flex className="items-center" direction="column" gap={{ base: 30, md: 50 }}>
			<QuoteSearchForm onSubmit={handleSubmit} onReset={handleReset} form={quoteSearchForm} />

			<Box w={{ base: '90%', md: '40%' }}>
				{isPending ? <DropdownSkeleton /> : <QuoteRender data={searchResults} />}
			</Box>
		</Flex>
	);
}
