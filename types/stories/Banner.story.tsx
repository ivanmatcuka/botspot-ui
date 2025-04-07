import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../src/components/Button/index';
import { Banner } from '../components/Banner';

const meta: Meta<typeof Banner> = {
  component: Banner,
  title: 'botspot/Banner',
  args: {
    headline: 'Sample Headline',
    sublineElement:
      'This is a sample subline. <strong>HTML content</strong> is allowed.',
    mediaBlockOptions: {
      assetUrl:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      autoplay: true,
      banner: true,
      objectFit: 'cover',
    },
    primaryCta: <Button variant="primary">Primary CTA</Button>,
    secondaryCta: <Button variant="secondary">Secondary CTA</Button>,
  },
  argTypes: {
    headline: {
      control: 'text',
      description: 'The main headline text displayed on the banner',
    },
    sublineElement: {
      control: 'text',
      description: 'Subline content, can accept HTML',
    },
    mediaBlockOptions: {
      control: 'object',
      description: 'Options for the media block (video or image)',
    },
    // primaryCta: {
    //   control: 'react-element',
    //   description: 'Primary call-to-action button or element',
    // },
    // secondaryCta: {
    //   control: 'react-element',
    //   description: 'Secondary call-to-action button or element',
    // },
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
    sublineElement:
      'Discover amazing features with <strong>our platform</strong>',
    mediaBlockOptions: {
      assetUrl:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      autoplay: true,
      banner: true,
      objectFit: 'cover',
    },
    primaryCta: <Button variant="primary">Get Started</Button>,
    secondaryCta: <Button variant="secondary">Learn More</Button>,
  },
};
