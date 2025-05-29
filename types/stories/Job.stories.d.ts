import type { Meta, StoryObj } from '@storybook/react';
import { JobProps } from '../components/Job';
declare const meta: Meta<JobProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const LongExcerpt: Story;
export declare const NoExcerpt: Story;
