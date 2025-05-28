import type { Meta, StoryObj } from '@storybook/react';

import { ComponentProps } from 'react';

import { Iframe } from '../components/3dIframe';

const meta: Meta<ComponentProps<typeof Iframe>> = {
  component: Iframe,
  tags: ['autodocs'],
  title: 'Components/Iframe',
  args: {
    src: 'https://sketchfab.com/models/7d89f65475664a0eabc39e3e7790cddf/embed?autostart=1&camera=0&transparent=1&ui_animations=0&ui_infos=0&ui_watermark_link=0&ui_watermark=0&ui_annotations=0&ui_color=4119bc&dnt=1',
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'The source URL for the embedded 3D model or content.',
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Embeds a 3D model or other content using an iframe. Provide a Sketchfab or other embeddable URL.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://sketchfab.com/models/7d89f65475664a0eabc39e3e7790cddf/embed?autostart=1&camera=0&transparent=1&ui_animations=0&ui_infos=0&ui_watermark_link=0&ui_watermark=0&ui_annotations=0&ui_color=4119bc&dnt=1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default 3D model embedded from Sketchfab.',
      },
    },
  },
};

export const AlternateModel: Story = {
  args: {
    src: 'https://sketchfab.com/models/c896b54b644443cc8e6c04aa3e5d6d45/embed?autostart=1&camera=0&transparent=1&ui_animations=0&ui_infos=0&ui_watermark_link=0&ui_watermark=0&ui_annotations=0&ui_color=4119bc&dnt=1',
  },
  parameters: {
    docs: {
      description: {
        story: 'An alternate 3D model to demonstrate flexibility.',
      },
    },
  },
};

export const InvalidSrc: Story = {
  args: {
    src: 'https://example.com/invalid-url',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates how the component handles an invalid or non-embeddable URL.',
      },
    },
  },
};

export const EmptySrc: Story = {
  args: {
    src: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'No src provided. The iframe will not render any content.',
      },
    },
  },
};
