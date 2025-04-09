import type { Meta, StoryObj } from '@storybook/react';

import { ComponentProps } from 'react';

import { Iframe } from '../components/3dIframe/index';

const meta: Meta<ComponentProps<typeof Iframe>> = {
  component: Iframe,
  title: 'botspot/Iframe',
  args: {
    src: 'https://sketchfab.com/models/7d89f65475664a0eabc39e3e7790cddf/embed?autostart=1&camera=0&transparent=1&ui_animations=0&ui_infos=0&ui_watermark_link=0&ui_watermark=0&ui_annotations=0&ui_color=4119bc&dnt=1',
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'Source URL',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://sketchfab.com/models/7d89f65475664a0eabc39e3e7790cddf/embed?autostart=1&camera=0&transparent=1&ui_animations=0&ui_infos=0&ui_watermark_link=0&ui_watermark=0&ui_annotations=0&ui_color=4119bc&dnt=1',
  },
};
