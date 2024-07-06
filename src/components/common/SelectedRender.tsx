import { Box } from '@mantine/core';
import { useTranslations } from 'next-intl';
import type { ModelTranslations } from 'global';
import type { ReactNode } from 'react';

/**
 * Props for {@link SelectedRender}.
 */
type SelectedRenderProps = Readonly<{
	/**
	 * The name of the rendered model. Used for translations only.
	 */
	modelName: ModelTranslations;

	/**
	 * The children of the component.
	 */
	children?: ReactNode;
}>;

/**
 * Component that renders the selected model or a placeholder if no model is selected.
 */
export function SelectedRender({ children, modelName }: SelectedRenderProps) {
	const t = useTranslations('SelectedRender');
	const tModel = useTranslations(`models.${modelName}`);

	return <Box>{children ?? t('selectStock', { modelName: tModel('name') })}</Box>;
}
