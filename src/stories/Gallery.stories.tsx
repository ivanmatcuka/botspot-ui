import type { Meta, StoryObj } from '@storybook/react';
import { Iframe } from '../components/3dIframe';
import { Gallery, GalleryProps } from '../components/Gallery';

const meta: Meta<GalleryProps> = {
  title: 'botspot/Gallery',
  component: Gallery,
  tags: ['autodocs'],
  args: {
    transparent: true,
    children: [
      <Iframe
        key="iframe1"
        src="https://sketchfab.com/models/a934a5364ef24f828333206a23f18d17/embed?autostart=1&camera=0&transparent=1&ui_animations=0&ui_infos=0&ui_watermark_link=0&ui_watermark=0&ui_annotations=0&ui_color=4119bc&dnt=1"
      />,
      <Iframe
        key="iframe2"
        src="https://sketchfab.com/models/c896b54b644443cc8e6c04aa3e5d6d45/embed?autostart=1&camera=0&transparent=1&ui_animations=0&ui_infos=0&ui_watermark_link=0&ui_watermark=0&ui_annotations=0&ui_color=4119bc&dnt=1"
      />,
    ],
  },
  argTypes: {
    transparent: {
      control: 'boolean',
      description: 'Toggle background between transparent and grey',
    },
    children: {
      control: false,
      description: 'Two iframe elements to render inside the gallery',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
