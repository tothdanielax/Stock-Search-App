import { z } from 'zod';
import { GetQuoteRequestSchema } from '@/api/quote.schema';

export const QuoteSearchFormSchema = GetQuoteRequestSchema;
export type QuoteSearchFormType = z.infer<typeof QuoteSearchFormSchema>;
