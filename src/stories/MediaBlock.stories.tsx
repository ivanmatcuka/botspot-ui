import type { Meta, StoryObj } from '@storybook/react';

import type { MediaBlockProps } from '../components/MediaBlock';

import { MediaBlock } from '../components/MediaBlock';

const meta: Meta<MediaBlockProps> = {
  component: MediaBlock,
  tags: ['autodocs'],
  title: 'botspot/MediaBlock',
  args: {
    autoplay: true,
    banner: false,
    containerClassName: '',
    fullHeight: false,
    objectFit: 'cover',
    assetUrl:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  },
  argTypes: {
    assetUrl: {
      control: 'text',
      description: 'URL of the asset (image/video)',
    },
    autoplay: {
      control: 'boolean',
      description: 'Autoplay video if true',
    },
    banner: {
      control: 'boolean',
      description: 'Whether it is a banner-style media',
    },
    fullHeight: {
      control: 'boolean',
      description: 'Whether the block takes full height (100vh)',
    },
    objectFit: {
      control: 'select',
      description: 'Object fit property for images and videos',
      options: ['contain', 'cover'],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const VideoExample: Story = {
  args: {
    autoplay: true,
    banner: false,
    fullHeight: false,
    objectFit: 'cover',
  },
};
