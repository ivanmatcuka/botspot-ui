import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/Button';
import { MainBlock, MainBlockProps } from '../components/MainBlock';

const meta: Meta<MainBlockProps> = {
  component: MainBlock,
  tags: ['autodocs'],
  title: 'Components/MainBlock',
  args: {
    headline: 'Welcome to MainBlock',
    subline: 'Experience the best with our exclusive features',
    children: (
      <Button href="#" variant="primary">
        Get Started
      </Button>
    ),
    subAssetUrl:
      'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
  },
  argTypes: {
    children: {
      control: false,
      description: 'Content to display below the headline and subline.',
    },
    headline: {
      control: 'text',
      description: 'Main headline text.',
    },
    subAssetUrl: {
      control: 'text',
      description: 'Optional asset/image URL displayed below the content.',
    },
    subline: {
      control: 'text',
      description: 'Subline text, plain string (HTML not rendered).',
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'MainBlock is a prominent section component with headline, subline, optional image, and custom content. Use the controls to explore all features and states.',
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
          'A main block with headline, subline, image, and a call-to-action button.',
      },
    },
  },
};

export const NoImage: Story = {
  args: {
    subAssetUrl: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Main block without an image.',
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
        story: 'Main block with no content below the headline and subline.',
      },
    },
  },
};

export const LongSubline: Story = {
  args: {
    subline:
      'This is a very long subline meant to test how the component handles large amounts of text. It should wrap and display correctly across all screen sizes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Main block with a long subline to test text wrapping.',
      },
    },
  },
};

export const NoHeadline: Story = {
  args: {
    headline: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Main block with no headline (edge case).',
      },
    },
  },
};
