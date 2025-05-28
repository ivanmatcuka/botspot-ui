import type { Meta, StoryObj } from '@storybook/react';

import { ScrollableVideo } from '../components/ScrollableVideo';

const mockImages = [
  'https://picsum.photos/id/1011/1200/800',
  'https://picsum.photos/id/1012/1200/800',
  'https://picsum.photos/id/1013/1200/800',
  'https://picsum.photos/id/1014/1200/800',
  'https://picsum.photos/id/1015/1200/800',
  'https://picsum.photos/id/1016/1200/800',
  'https://picsum.photos/id/1017/1200/800',
  'https://picsum.photos/id/1018/1200/800',
  'https://picsum.photos/id/1019/1200/800',
  'https://picsum.photos/id/1020/1200/800',
];

const meta: Meta<{ imagesUrls?: string[] }> = {
  component: ScrollableVideo,
  tags: ['autodocs'],
  title: 'Components/ScrollableVideo',
  args: {
    imagesUrls: mockImages,
  },
  argTypes: {
    imagesUrls: {
      control: false,
      description: 'Array of image URLs for scrollable video effect.',
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'ScrollableVideo simulates a video effect by swapping images as you scroll. Useful for product or animation showcases.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Scrollable video effect with 10 images.',
      },
    },
  },
};

export const FewImages: Story = {
  args: {
    imagesUrls: mockImages.slice(0, 3),
  },
  parameters: {
    docs: {
      description: {
        story: 'Scrollable video effect with only 3 images.',
      },
    },
  },
};

export const NoImages: Story = {
  args: {
    imagesUrls: [],
  },
  parameters: {
    docs: {
      description: {
        story: 'No images provided (empty state).',
      },
    },
  },
};
