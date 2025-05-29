import type { Meta, StoryObj } from '@storybook/react';
import { PaginationProps } from '../components/Pagination';
declare const meta: Meta<PaginationProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const ManyPages: Story;
export declare const OnePage: Story;
export declare const LargePerPage: Story;
