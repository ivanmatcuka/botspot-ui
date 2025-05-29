import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '@mui/material';

import { ScrollableBlock } from '../components/__ScrollableBlock';

const mockImages = [
  'https://picsum.photos/id/1011/400/200',
  'https://picsum.photos/id/1012/400/200',
  'https://picsum.photos/id/1013/400/200',
  'https://picsum.photos/id/1014/400/200',
  'https://picsum.photos/id/1015/400/200',
  'https://picsum.photos/id/1016/400/200',
  'https://picsum.photos/id/1017/400/200',
  'https://picsum.photos/id/1018/400/200',
  'https://picsum.photos/id/1019/400/200',
  'https://picsum.photos/id/1020/400/200',
];

const meta: Meta<typeof ScrollableBlock> = {
  component: ScrollableBlock,
  title: 'Components/ScrollableBlock',
  args: {
    children: <Typography>Default children content</Typography>,
    imagesUrls: mockImages.slice(0, 3),
  },
  argTypes: {
    children: { control: false },
    imagesUrls: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof ScrollableBlock>;

export const Default: Story = {};

export const NoImages: Story = {
  args: {
    imagesUrls: undefined,
  },
};

export const NoChildren: Story = {
  args: {
    children: null,
  },
};

export const ManyImages: Story = {
  args: {
    imagesUrls: mockImages,
  },
};

export const EmptyProps: Story = {
  args: {
    children: null,
    imagesUrls: undefined,
  },
};
