import type { Meta, StoryObj } from '@storybook/react';
import { GalleryProps } from '../components/Gallery';
declare const meta: Meta<GalleryProps>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const OpaqueBackground: Story;
export declare const SingleChild: Story;
export declare const NoChildren: Story;
