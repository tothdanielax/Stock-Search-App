'use client';

import { useEffect } from 'react';
import { useStore } from '@/store/store';
import { useStockStore } from '@/store/slices/stockStore';
import { Link } from '@/navigation';
import { Anchor } from '@mantine/core';
import { useTranslations } from 'next-intl';

export function StockDetailsClient({ symbol }: { symbol: string }) {
	const stockStore = useStore(useStockStore, (state) => state);
	const t = useTranslations('StockDetailsPage');

	useEffect(() => {
		if (stockStore?.selectedStockSymbol !== symbol) {
			stockStore?.setSelectedStockSymbol(symbol);
		}
	}, [stockStore, symbol]);

	return (
		<Anchor component={Link} href="/" mt="lg">
			{t('back')}
		</Anchor>
	);
}
