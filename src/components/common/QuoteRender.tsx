import type { GetQuoteResponse } from '@/api/quote.schema';
import { Flex, Text } from '@mantine/core';
import { useTranslations } from 'next-intl';

function Quote({ translation, value }: { translation: string; value: string }) {
	return (
		<Text>
			<Text span fw={500}>
				{translation}:
			</Text>{' '}
			{value}
		</Text>
	);
}

/**
 * Props for the {@link QuoteRender} component.
 */
type QuoteRenderProps = {
	data: GetQuoteResponse | undefined;
};

/**
 * A render for the Global Quote.
 */
export function QuoteRender({ data }: QuoteRenderProps) {
	const t = useTranslations('QuoteRender');
	const tDaily = useTranslations('DailyQuote');

	const globalQuote = data?.['Global Quote'];

	return (
		data &&
		(globalQuote ? (
			<Flex justify="center" direction="column">
				<Quote translation={tDaily('symbol')} value={globalQuote['01. symbol']} />
				<Quote translation={tDaily('open')} value={globalQuote['02. open']} />
				<Quote translation={tDaily('high')} value={globalQuote['03. high']} />
				<Quote translation={tDaily('low')} value={globalQuote['04. low']} />
				<Quote translation={tDaily('price')} value={globalQuote['05. price']} />
				<Quote translation={tDaily('volume')} value={globalQuote['06. volume']} />
				<Quote
					translation={tDaily('latestTradingDay')}
					value={globalQuote['07. latest trading day']}
				/>
				<Quote translation={tDaily('previousClose')} value={globalQuote['08. previous close']} />
				<Quote translation={tDaily('change')} value={globalQuote['09. change']} />
				<Quote translation={tDaily('changePercent')} value={globalQuote['10. change percent']} />
			</Flex>
		) : (
			<Text>{t('noData')}</Text>
		))
	);
}
