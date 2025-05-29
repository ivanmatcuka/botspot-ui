import type { Meta, StoryObj } from '@storybook/react';
declare const meta: Meta<{
    count?: number;
}>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const FewSkeletons: Story;
export declare const ManySkeletons: Story;
