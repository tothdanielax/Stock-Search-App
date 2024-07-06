import type { GetSearchResponse } from '@/api/search.schema';
import { Box, Divider, Flex, Text } from '@mantine/core';
import { useTranslations } from 'next-intl';

/**
 * Props for the {@link SearchHelpRender} component.
 */
type SearchHelpRenderProps = {
	suggestions: GetSearchResponse;
	onClick: (symbol: string) => void;
};

/**
 * A search help render. Renders the search suggestions (symbol - name).
 */
export function SearchHelpRender({ suggestions, onClick }: SearchHelpRenderProps) {
	const t = useTranslations('SearchHelpRender');

	return (
		<Box bg="gray" p={5}>
			{Object.entries(suggestions.bestMatches).length > 0 ? (
				suggestions.bestMatches.map((match) => (
					<>
						<Flex
							key={match['1. symbol']}
							justify="space-between"
							align="center"
							onClick={() => onClick(match['1. symbol'])}
							className="cursor-pointer"
						>
							<Text w="50%"> {match['1. symbol']} </Text>
							<Text className="text-wrap text-right" w="50%">
								{match['2. name']}
							</Text>
						</Flex>
						<Divider />
					</>
				))
			) : (
				<Text> {t('noSuggestions')} </Text>
			)}
		</Box>
	);
}
