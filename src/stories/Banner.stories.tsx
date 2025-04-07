import type { Meta, StoryObj } from '@storybook/react';

import { Banner } from '../components/Banner';

const meta: Meta<typeof Banner> = {
  component: Banner,
  tags: ['autodocs'],
  title: 'botspot/Banner',
  args: {
    headline: 'Sample Headline',
    mediaBlockOptions: {
      autoplay: true,
      banner: true,
      objectFit: 'cover',
      assetUrl:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    },
    primary: {
      href: '#',
      value: 'Primary CTA',
    },
    secondary: {
      href: '#',
      value: 'Secondary CTA',
    },
    sublineElement:
      'This is a sample subline. <strong>HTML content</strong> is allowed.',
  },
  argTypes: {
    headline: {
      control: 'text',
      description: 'The main headline text displayed on the banner',
    },
    mediaBlockOptions: {
      control: 'object',
      description: 'Options for the media block (video or image)',
    },
    primary: {
      control: 'object',
      description: 'Primary call-to-action button or element',
    },
    secondary: {
      control: 'object',
      description: 'Secondary call-to-action button or element',
    },
    sublineElement: {
      control: 'text',
      description: 'Subline content, can accept HTML',
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
    headline: 'Welcome to Our Service',
    mediaBlockOptions: {
      autoplay: true,
      banner: true,
      objectFit: 'cover',
      assetUrl:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    },
    sublineElement:
      'Discover amazing features with <strong>our platform</strong>',
  },
};
