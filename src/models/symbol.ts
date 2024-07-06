import { z } from 'zod';

export const SymbolSchema = z
	.string({
		description: 'The symbol of the global ticker of your choice. For example: symbol=IBM.',
	})
	.min(1, 'Symbol needs to be at least 1 character long.');
