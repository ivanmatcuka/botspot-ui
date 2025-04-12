import type { Meta, StoryObj } from '@storybook/react';
import { PostsProps } from '../components/Posts';
declare const meta: Meta<PostsProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Loading: Story;
export declare const ListLayout: Story;
export declare const WithoutPagination: Story;
