import { SymbolSearch } from '@/components/pages/index/SearchForm/SymbolSearch';
import { type UseFormReturnType } from '@mantine/form';
import type { QuoteSearchFormType } from '@/components/pages/index/SearchForm/quoteSearchForm.schema';

/**
 * Props for the {@link QuoteSearchFormType} component.
 */
type QuoteSearchFormProps = Readonly<{
	/**
	 * The JS form component itself, returned by the {@link useForm} hook.
	 */

	form: UseFormReturnType<QuoteSearchFormType>;
	/**
	 * Function to call when the form is submitted.
	 */
	onSubmit: (values: QuoteSearchFormType) => void;

	/**
	 * Function to call when the form is reset.
	 */
	onReset: () => void;
}>;

/**
 * Form for searching for Global Quote.
 */
export function QuoteSearchForm({ onSubmit, onReset, form }: QuoteSearchFormProps) {
	const handleHelpClick = (symbol: string) => {
		form.setFieldValue('symbol', symbol);
	};

	return (
		<form
			className="relative flex h-full flex-col items-center justify-center gap-5 py-10 sm:w-screen md:w-1/2"
			onSubmit={form.onSubmit(onSubmit)}
			onReset={onReset}
		>
			<SymbolSearch
				key={form.key('symbol')}
				{...form.getInputProps('symbol')}
				onHelpClick={handleHelpClick}
			/>
		</form>
	);
}
