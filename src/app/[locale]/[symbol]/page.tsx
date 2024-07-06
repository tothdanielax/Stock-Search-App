import { Flex, Title } from '@mantine/core';
import { getQuote } from '@/api/quote.api';
import { getDaily } from '@/api/daily.api';
import { QuoteRender } from '@/components/common/QuoteRender';
import { DailyTimeSeriesDropdown } from '@/components/pages/[symbol]/DailyTimeSeriesDropdown/DailyTimeSeriesDropdown';
import { notFound } from 'next/navigation';
import { StockDetailsClient } from '@/app/[locale]/[symbol]/_client';
import { getTranslations } from 'next-intl/server';
/**
 * Props for {@link StockDetailsPage}
 */
export type StockDetailsPageProps = {
	params: {
		locale: string;
		symbol: string;
	};
};

/**
 * Fetches data for the stock details page.
 * @param symbol - Stock symbol to fetch data for.
 */
async function fetchData(symbol: string) {
	const [quoteData, dailyData] = await Promise.all([getQuote({ symbol }), getDaily({ symbol })]);
	return { quoteData, dailyData };
}

export default async function StockDetailsPage({ params }: StockDetailsPageProps) {
	const { symbol } = params;
	const { quoteData, dailyData } = await fetchData(symbol);
	const t = await getTranslations('StockDetailsPage');

	if (!quoteData?.['Global Quote'] || !dailyData?.['Time Series (Daily)']) {
		notFound();
	}

	return (
		<>
			<StockDetailsClient symbol={symbol} />
			<Flex justify="center" align="start" direction="row" p={50}>
				<Flex direction="column" w="50%">
					<Title order={1} td="underline">
						{t('quote')}
					</Title>
					<QuoteRender data={quoteData} />
				</Flex>
				<Flex direction="column" w="50%">
					<Title order={1} td="underline">
						{t('daily')}
					</Title>
					<DailyTimeSeriesDropdown results={dailyData['Time Series (Daily)']} />
				</Flex>
			</Flex>
		</>
	);
}
