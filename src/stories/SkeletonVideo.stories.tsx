import type { Meta, StoryObj } from '@storybook/react';

import { SkeletonVideo, SkeletonVideoProps } from '../components/SkeletonVideo';

const meta: Meta<SkeletonVideoProps> = {
  component: SkeletonVideo,
  title: 'botspot/SkeletonVideo',
  args: {
    autoPlay: true,
    loop: true,
    muted: true,
    videoSrc:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  },
  argTypes: {
    videoSrc: {
      control: 'text',
      description: 'URL of the video to be played',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
