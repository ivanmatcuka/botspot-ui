import type { Meta, StoryObj } from '@storybook/react';
import { PropsWithChildren } from 'react';
import { PageContainerProps } from '../components/PageContainer';
declare const meta: Meta<PropsWithChildren<PageContainerProps>>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const BannerMode: Story;
export declare const NoPadding: Story;
export declare const CustomBg: Story;
