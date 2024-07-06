import type { Meta, StoryObj } from '@storybook/react';
import { SearchHelpRender } from '@/components/pages/index/SearchForm/SearchHelpRender';
import type { GetSearchResponse } from '@/api/search.schema';
import { mockGetSearchResponse } from '@mocks/mockGetSearchResponse';

const meta = {
	title: 'Pages/Index/SearchForm/SearchHelpRender',
	component: SearchHelpRender,
	args: {
		suggestions: mockGetSearchResponse,
	},
} satisfies Meta<typeof SearchHelpRender>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const NoMatch: Story = {
	args: {
		suggestions: { bestMatches: [] } as GetSearchResponse,
	},
};
