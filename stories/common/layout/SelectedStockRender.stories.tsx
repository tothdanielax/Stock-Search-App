import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SelectedStockRender } from '@/components/layout/SelectedStockRender';

const meta = {
	title: 'Common/Layout/SelectedStockRender',
	component: SelectedStockRender,
	args: {
		model: 'Symbol',
		onChange: fn(),
	},
} satisfies Meta<typeof SelectedStockRender>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
