import { SelectedRender } from '@/components/common/SelectedRender';
import { Text, Tooltip } from '@mantine/core';
import { Link } from '@/navigation';
import React from 'react';
import { useStore } from '@/store/store';
import { useStockStore } from '@/store/slices/stockStore';
import { useTranslations } from 'next-intl';

/**
 * Renders the selected stock symbol. On click, it navigates to the detailed stock page.
 * @constructor
 */
export function SelectedStockRender() {
	const stockStore = useStore(useStockStore, (state) => state);
	const t = useTranslations('SelectedStockRender');
	const tModel = useTranslations('models.Symbol');

	return (
		<SelectedRender modelName="Symbol">
			<Text fw={400}>
				{stockStore?.selectedStockSymbol ? (
					<Tooltip label={t('tooltip')} position="bottom">
						<Link href={`/${stockStore?.selectedStockSymbol}`} className="cursor-pointer">
							{tModel('name')}: {stockStore?.selectedStockSymbol}
						</Link>
					</Tooltip>
				) : (
					t('selectStock')
				)}
			</Text>
		</SelectedRender>
	);
}
