import { z } from 'zod';
import { MetadataSchema } from '@/models/metadata';
import { TimeSeriesSchema } from '@/models/time-series';

export const GetDailyRequestSchema = z.object({
	symbol: z.string({
		description: 'The name of the equity of your choice. For example: symbol=IBM',
	}),
	outputsize: z
		.enum(['compact', 'full'], {
			description:
				'By default, outputsize=compact. Set to outputsize=full to receive the full-length time series.',
		})
		.optional(),
});

export type GetDailyRequest = z.infer<typeof GetDailyRequestSchema>;

export const GetDailyResponseSchema = z.object({
	Metadata: MetadataSchema,
	TimeSeries: TimeSeriesSchema,
});

export type GetDailyResponse = z.infer<typeof GetDailyResponseSchema>;

export type GetDailyTimeSeries = (request: GetDailyRequest) => Promise<GetDailyResponse>;
