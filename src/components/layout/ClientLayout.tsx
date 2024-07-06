'use client';

import React, { type ReactNode } from 'react';
import { AppShell, Flex, MantineProvider } from '@mantine/core';
import { AnimatePresence } from 'framer-motion';
import { LanguageSelect } from '@/components/common/inputs/LanguageSelect';
import { ColorSchemeToggle } from '@/components/common/inputs/ColorSchemeToggle';
import { theme } from '@/theme';
import { SelectedStockRender } from '@/components/layout/SelectedStockRender';

/**
 * Props for {@link ClientLayout}
 */
type ClientLayoutProps = Readonly<{
	/**
	 * The page content.
	 */
	children: ReactNode;
}>;

/**
 * The layout for the client side of the app.
 */
export function ClientLayout({ children }: ClientLayoutProps) {
	return (
		<AnimatePresence mode="wait" initial={false}>
			<MantineProvider defaultColorScheme="auto" theme={theme}>
				<AppShell
					header={{ height: { base: 150, sm: 60 } }}
					padding="sm"
					w="100vw"
					h="100vh"
					pos="relative"
					className="overflow-x-hidden"
				>
					<AppShell.Header>
						<Flex
							w="100vw"
							justify="space-between"
							align="center"
							gap={{ base: 15, sm: 5 }}
							py={5}
							px={{
								base: 10,
								sm: 20,
							}}
							mb={{ base: 20, xs: 0 }}
							direction={{ base: 'column', sm: 'row' }}
						>
							<Flex
								className="w-fit"
								justify="center"
								align="center"
								direction={{
									base: 'column',
									sm: 'row',
								}}
								gap={{ base: 15, sm: 5 }}
							>
								<LanguageSelect />
								<ColorSchemeToggle />
							</Flex>
							<SelectedStockRender />
						</Flex>
					</AppShell.Header>
					<AppShell.Main h="100%">{children}</AppShell.Main>
				</AppShell>
			</MantineProvider>
		</AnimatePresence>
	);
}
