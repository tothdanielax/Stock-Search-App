import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { QuoteSearchForm } from '@/components/pages/index/SearchForm/QuoteSearchForm';
import { useForm as originalUseForm, type UseFormInput } from '@mantine/form';

const useForm = (
	args:
		| UseFormInput<Record<string, any>, (values: Record<string, any>) => Record<string, any>>
		| undefined,
) => {
	const form = originalUseForm(args);
	return {
		...form,
		setFieldValue: fn(form.setFieldValue),
		reset: fn(form.reset),
		onSubmit: fn(form.onSubmit),
		onReset: fn(form.onReset),
	};
};

const meta = {
	title: 'Pages/Index/SearchForm/QuoteSearchForm',
	component: QuoteSearchForm,
} satisfies Meta<typeof QuoteSearchForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => {
		const form = useForm({
			initialValues: {
				term: 'test',
				limit: 10,
			},
		});

		// @ts-ignore
		return <QuoteSearchForm form={form} onSubmit={fn()} onReset={fn()} />;
	},
};
