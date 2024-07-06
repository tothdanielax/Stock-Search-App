'use client';

import { Anchor, Flex, Text, Title } from '@mantine/core';
import { usePathname, Link } from '@/navigation';
import { useTranslations } from 'next-intl';

export default function NotFound() {
	const path = usePathname();
	const symbol = path.split('/')[1];

	const t = useTranslations('NotFound');

	return (
		<Flex justify="center" align="center" direction="column" h="100%">
			<Title>404 - {t('notFound')}</Title>
			<Text>{t('messages.invalidSymbol', { symbol })} </Text>
			<Anchor component={Link} href="/" mt="lg">
				{t('back')}
			</Anchor>
		</Flex>
	);
}
