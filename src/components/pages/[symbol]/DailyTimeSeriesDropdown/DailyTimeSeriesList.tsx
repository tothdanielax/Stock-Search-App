import { List, Text } from '@mantine/core';
import { motion } from 'framer-motion';
import { type GetDailyResponse } from '@/api/daily.schema';

/**
 * Props for the {@link DailyTimeSeriesList} component.
 */
export type DailyTimeSeriesListProps = Readonly<{
	/**
	 * List of results.
	 */
	results: GetDailyResponse['Time Series (Daily)'];
}>;

/**
 * List for displaying the daily time series.
 */
export function DailyTimeSeriesList({ results }: DailyTimeSeriesListProps) {
	return (
		<List listStyleType="disc">
			{Object.entries(results).map(([key, value], mainIndex) => (
				<List.Item key={key} mb={20}>
					<motion.div
						initial={{ opacity: 0, x: '-10vw' }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.2, delay: mainIndex * 0.1 }}
					>
						<Text fw={600}> {key} </Text>
						<List withPadding listStyleType="disc">
							{Object.entries(value).map((subvalue) => (
								<List.Item className="cursor-pointer" key={`${key}-${subvalue[0]}`} pl={10}>
									{subvalue[0]}: {subvalue[1]}
								</List.Item>
							))}
						</List>
					</motion.div>
				</List.Item>
			))}
		</List>
	);
}
