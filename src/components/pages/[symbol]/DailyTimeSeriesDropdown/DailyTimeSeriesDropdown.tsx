'use client';

import {
	DailyTimeSeriesList,
	type DailyTimeSeriesListProps,
} from '@/components/pages/[symbol]/DailyTimeSeriesDropdown/DailyTimeSeriesList';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { type ElementProps, Flex, Pagination, Text } from '@mantine/core';

const MAX_RESULTS_PER_PAGE = 3;

/**
 * Props for the {@link DailyTimeSeriesDropdown} component.
 */
type DailyTimeSeriesDropdownProps = Omit<DailyTimeSeriesListProps, 'onRowClick'> &
	ElementProps<typeof Flex>;

/**
 * A dropdown for Stocks in Daily Time Series format.
 */
export function DailyTimeSeriesDropdown({ results, ...props }: DailyTimeSeriesDropdownProps) {
	const t = useTranslations('ResultDropdown');
	const [page, setPage] = useState(1);

	const paginatedData = results
		? Object.entries(results).slice((page - 1) * MAX_RESULTS_PER_PAGE, page * MAX_RESULTS_PER_PAGE)
		: [];

	return (
		<Flex
			justify="center"
			align="start"
			direction="column"
			w={{
				base: '100vw',
				md: 'auto',
			}}
			{...props}
		>
			{paginatedData?.length === 0 ? (
				<Text>{t('noResults')}</Text>
			) : (
				<DailyTimeSeriesList results={Object.fromEntries(paginatedData)} />
			)}
			<Pagination
				total={Object.entries(results).length / MAX_RESULTS_PER_PAGE}
				value={page}
				onChange={setPage}
				mt="sm"
				size="sm"
				w={{ base: '90%', md: 'auto' }}
			/>
		</Flex>
	);
}
