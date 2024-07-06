import type { Meta, StoryObj } from '@storybook/react';
import { DailyTimeSeriesList } from '@/components/pages/[symbol]/DailyTimeSeriesDropdown/DailyTimeSeriesList';
import { mockGetDailyResponse } from '@mocks/mockGetDailyResponse';

const meta = {
	title: 'Pages/[symbol]/DailyTimeSeriesDropdown/DailyTimeSeriesList',
	component: DailyTimeSeriesList,
} satisfies Meta<typeof DailyTimeSeriesList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		results: mockGetDailyResponse['Time Series (Daily)'],
	},
};
