import type { Meta, StoryObj } from '@storybook/react';
import { SymbolSearch } from '@/components/pages/index/SearchForm/SymbolSearch';
import { fn } from '@storybook/test';

const meta = {
	title: 'Pages/Index/SearchForm/SymbolSearch',
	component: SymbolSearch,
	args: {
		onChange: fn(),
		onHelpClick: fn(),
		value: '',
	},
} satisfies Meta<typeof SymbolSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
