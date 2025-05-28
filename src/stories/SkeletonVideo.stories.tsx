import type { Meta, StoryObj } from '@storybook/react';

import { SkeletonVideo, SkeletonVideoProps } from '../components/SkeletonVideo';

const meta: Meta<SkeletonVideoProps> = {
  component: SkeletonVideo,
  tags: ['autodocs'],
  title: 'Components/SkeletonVideo',
  args: {
    autoPlay: true,
    loop: true,
    muted: true,
    videoSrc:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  },
  argTypes: {
    autoPlay: {
      control: 'boolean',
      description: 'If true, video plays when in viewport.',
    },
    className: {
      control: 'text',
      description: 'Optional class names for styling.',
    },
    loop: {
      control: 'boolean',
      description: 'If true, video loops after ending.',
    },
    muted: {
      control: 'boolean',
      description: 'If true, video starts muted.',
    },
    videoSrc: {
      control: 'text',
      description: 'URL of the video to be played.',
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'SkeletonVideo displays a video with skeleton loading and customizable playback options. Use the controls to explore all features and states.',
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
        story: 'A skeleton video with autoplay, loop, and muted enabled.',
      },
    },
  },
};

export const NotMuted: Story = {
  args: {
    muted: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Skeleton video with sound enabled.',
      },
    },
  },
};

export const NoLoop: Story = {
  args: {
    loop: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Skeleton video that does not loop.',
      },
    },
  },
};

export const NoAutoplay: Story = {
  args: {
    autoPlay: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Skeleton video that does not autoplay.',
      },
    },
  },
};

export const NoVideo: Story = {
  args: {
    videoSrc: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Skeleton video with no video source (empty state).',
      },
    },
  },
};
