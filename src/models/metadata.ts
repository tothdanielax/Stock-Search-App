import { z } from 'zod';

export const MetadataSchema = z.object({
	'1. Information': z.string(),
	'2. Symbol': z.string(),
	'3. Last Refreshed': z.string(),
	'4. Output Size': z.string(),
	'5. Time Zone': z.string(),
});

export type Metadata = z.infer<typeof MetadataSchema>;
