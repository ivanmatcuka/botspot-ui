import type { Meta, StoryObj } from '@storybook/react';
declare const meta: Meta<{
    imagesUrls?: string[];
}>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const FewImages: Story;
export declare const NoImages: Story;
