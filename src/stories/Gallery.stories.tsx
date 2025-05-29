import type { Meta, StoryObj } from '@storybook/react';

import { PropsWithChildren } from 'react';

import { Iframe } from '../components/3dIframe';
import { Gallery, GalleryProps } from '../components/Gallery';

const meta: Meta<PropsWithChildren<GalleryProps>> = {
  component: Gallery,
  tags: ['autodocs'],
  title: 'Components/Gallery',
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
    children: {
      control: false,
      description: 'Iframe elements to render inside the gallery.',
    },
    transparent: {
      control: 'boolean',
      description: 'Toggle background between transparent and grey.',
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A gallery component for displaying 3D iframes or other content. Supports transparent or opaque backgrounds.',
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
        story: 'Gallery with two 3D iframes and a transparent background.',
      },
    },
  },
};

export const OpaqueBackground: Story = {
  args: {
    transparent: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Gallery with a grey (opaque) background.',
      },
    },
  },
};

export const SingleChild: Story = {
  args: {
    children: [
      <Iframe
        key="iframe1"
        src="https://sketchfab.com/models/a934a5364ef24f828333206a23f18d17/embed?autostart=1&camera=0&transparent=1&ui_animations=0&ui_infos=0&ui_watermark_link=0&ui_watermark=0&ui_annotations=0&ui_color=4119bc&dnt=1"
      />,
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Gallery with a single 3D iframe.',
      },
    },
  },
};

export const NoChildren: Story = {
  args: {
    children: [],
  },
  parameters: {
    docs: {
      description: {
        story: 'Gallery with no children (empty state).',
      },
    },
  },
};
