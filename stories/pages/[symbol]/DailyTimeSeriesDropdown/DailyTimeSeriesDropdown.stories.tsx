import type { Meta, StoryObj } from '@storybook/react';
import { DailyTimeSeriesDropdown } from '@/components/pages/[symbol]/DailyTimeSeriesDropdown/DailyTimeSeriesDropdown';
import { mockGetDailyResponse } from '@mocks/mockGetDailyResponse';

const meta = {
	title: 'Pages/[symbol]/DailyTimeSeriesDropdown/DailyTimeSeriesDropdown',
	component: DailyTimeSeriesDropdown,
	args: {
		results: mockGetDailyResponse['Time Series (Daily)'],
	},
} satisfies Meta<typeof DailyTimeSeriesDropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
