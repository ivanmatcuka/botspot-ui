import type { Meta, StoryObj } from '@storybook/react';

import { Banner, BannerProps } from '../components/Banner';
import { Button } from '../components/Button';

const meta: Meta<BannerProps> = {
  component: Banner,
  tags: ['autodocs'],
  title: 'Components/Banner',
  args: {
    headline: 'Sample Headline',
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
    mediaBlockOptions: {
      autoplay: true,
      banner: true,
      objectFit: 'cover',
      assetUrl:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      thumbSrc:
        'https://botspot.live-website.com/wp-content/uploads/2025/04/anycript_thumbnail_1.webp',
    },
    sublineElement:
      'This is a sample subline. <strong>HTML content</strong> is allowed.',
  },
  argTypes: {
    children: {
      control: false,
      description:
        'Call-to-action buttons or other elements to display in the banner.',
    },
    headline: {
      control: 'text',
      description: 'The main headline text displayed on the banner.',
    },
    mediaBlockOptions: {
      control: 'object',
      description: 'Options for the media block (video or image).',
    },
    sublineElement: {
      control: 'text',
      description: 'Subline content, can accept HTML.',
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A prominent banner component with headline, subline, media, and call-to-action support. Use the controls to explore all features.',
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
        story:
          'A typical banner with headline, subline, video, and two call-to-action buttons.',
      },
    },
  },
};

export const ImageMedia: Story = {
  args: {
    mediaBlockOptions: {
      assetUrl: 'https://picsum.photos/id/1015/1200/400',
      autoplay: false,
      banner: true,
      objectFit: 'cover',
      thumbSrc: '',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Banner with an image as the media block.',
      },
    },
  },
};

export const NoChildren: Story = {
  args: {
    children: null,
  },
  parameters: {
    docs: {
      description: {
        story: 'Banner without any call-to-action buttons.',
      },
    },
  },
};

export const NoMedia: Story = {
  args: {
    mediaBlockOptions: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: 'Banner without any media block.',
      },
    },
  },
};

export const OnlyHeadline: Story = {
  args: {
    children: null,
    headline: 'Headline Only',
    mediaBlockOptions: undefined,
    sublineElement: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Banner with only a headline.',
      },
    },
  },
};
