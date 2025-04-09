import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { Iframe } from '../components/3dIframe/index';
declare const meta: Meta<ComponentProps<typeof Iframe>>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
