import type { StoryObj } from '@storybook/react';
declare const meta: {
    args: {
        onClick: import("@vitest/spy").Mock<(...args: any[]) => any>;
    };
    tags: string[];
    title: string;
    argTypes: {
        variant: {
            control: string;
            options: string[];
        };
    };
    parameters: {
        layout: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
