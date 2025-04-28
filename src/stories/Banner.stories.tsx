import type { Meta, StoryObj } from '@storybook/react';

import { Banner, BannerProps } from '../components/Banner';
import { Button } from '../components/Button';

const meta: Meta<BannerProps> = {
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
      thumbSrc:
        'https://botspot.live-website.com/wp-content/uploads/2025/04/anycript_thumbnail_1.webp',
    },
    children: (
      <>
        <Button href="#" variant="primary">
          Primary CTA
        </Button>
        <Button href="#" variant="secondary">
          Secondary CTA
        </Button>
      </>
    ),
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
    children: {},
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
  args: {},
};
