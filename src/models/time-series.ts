import { z } from 'zod';
import { DataSchema } from '@/models/data';

export const TimeSeriesSchema = z.record(DataSchema);
export type TimeSeries = z.infer<typeof TimeSeriesSchema>;
