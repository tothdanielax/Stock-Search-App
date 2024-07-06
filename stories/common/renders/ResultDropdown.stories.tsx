import type { Meta, StoryObj } from '@storybook/react';
import { ResultDropdown } from '@/components/common/ResultDropdown';

const meta = {
	title: 'Common/Render/ResultDropdown',
	component: ResultDropdown,
	args: {},
} satisfies Meta<typeof ResultDropdown>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		label: 'Results',
		children: <p>Children</p>,
	},
};
