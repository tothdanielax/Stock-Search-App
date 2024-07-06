import { QuoteRender } from '@/components/common/QuoteRender';
import type { Meta, StoryObj } from '@storybook/react';
import { mockGetQuoteResponse } from '@mocks/mockGetQuoteResponse';

const meta = {
	title: 'Common/Render/QuoteRender',
	component: QuoteRender,
} satisfies Meta<typeof QuoteRender>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	name: 'Default',
	args: {
		data: mockGetQuoteResponse,
	},
};
