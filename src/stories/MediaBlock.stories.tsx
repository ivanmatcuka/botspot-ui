import type { Meta, StoryObj } from '@storybook/react';

import type { MediaBlockProps } from '../components/MediaBlock';

import { MediaBlock } from '../components/MediaBlock';

const meta: Meta<MediaBlockProps> = {
  component: MediaBlock,
  tags: ['autodocs'],
  title: 'Components/MediaBlock',
  args: {
    fullHeight: false,
    objectFit: 'cover',
    assetUrl:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  },
  argTypes: {
    assetUrl: {
      control: 'text',
      description: 'URL of the asset (image or video).',
    },
    fullHeight: {
      control: 'boolean',
      description: 'Whether the block takes full height (100vh).',
    },
    objectFit: {
      control: 'select',
      description: 'Object fit property for images and videos.',
      options: ['contain', 'cover'],
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'MediaBlock displays an image or video with configurable object-fit and height. Use the controls to explore all features and states.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const VideoExample: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'MediaBlock displaying a video asset.',
      },
    },
  },
};

export const ImageExample: Story = {
  args: {
    assetUrl: 'https://picsum.photos/id/1015/1200/400',
  },
  parameters: {
    docs: {
      description: {
        story: 'MediaBlock displaying an image asset.',
      },
    },
  },
};

export const FullHeight: Story = {
  args: {
    fullHeight: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'MediaBlock with full viewport height.',
      },
    },
  },
};

export const ContainFit: Story = {
  args: {
    objectFit: 'contain',
  },
  parameters: {
    docs: {
      description: {
        story: 'MediaBlock with object-fit set to contain.',
      },
    },
  },
};

export const NoAsset: Story = {
  args: {
    assetUrl: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'MediaBlock with no asset URL (edge case).',
      },
    },
  },
};
