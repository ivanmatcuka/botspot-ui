import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/Button';
import { MainBlock, MainBlockProps } from '../components/MainBlock';

const meta: Meta<MainBlockProps> = {
  component: MainBlock,
  tags: ['autodocs'],
  title: 'botspot/MainBlock',
  args: {
    headline: 'Welcome to MainBlock',
    subline: 'Experience the best with our <strong>exclusive features</strong>',
    children: (
      <Button href="#" variant="primary">
        Get Started
      </Button>
    ),
    subAssetUrl:
      'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
  },
  argTypes: {
    headline: {
      control: 'text',
      description: 'Main headline text',
    },
    subAssetUrl: {
      control: 'text',
      description: 'Optional asset/image URL displayed below the content',
    },
    subline: {
      control: 'text',
      description: 'Subline text, plain string (HTML not rendered)',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: 'Welcome to MainBlock',
    subline: 'Start exploring amazing features today.',
    cta: {
      href: '#',
      value: 'Get Started',
      variant: 'primary',
    },
    subAssetUrl:
      'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
  },
};
