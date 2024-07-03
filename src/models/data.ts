import { z } from 'zod';

export const DataSchema = z.object({
	'1. open': z.string(),
	'2. high': z.string(),
	'3. low': z.string(),
	'4. close': z.string(),
	'5. volume': z.string(),
});

export type Data = z.infer<typeof DataSchema>;
