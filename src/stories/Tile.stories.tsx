import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

import { Button } from '../components/Button';
import { Tile, TileProps } from '../components/Tile';

const meta: Meta<PropsWithChildren<TileProps>> = {
  component: Tile,
  tags: ['autodocs'],
  title: 'Components/Tile',
  args: {
    headline: 'Engaging Headline',
    children: (
      <>
        <Typography variant="body1" paragraph>
          This is some supporting content next to the headline. Use it for
          descriptions, lists, or calls to action.
        </Typography>
        <Button variant="primary">Call to Action</Button>
      </>
    ),
  },
  argTypes: {
    children: {
      control: false,
      description: 'Content to display next to the headline.',
    },
    headline: {
      control: 'text',
      description: 'Main heading text displayed on the left.',
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Tile is a flexible layout component for displaying a headline and supporting content side by side.',
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
        story: 'A tile with headline, supporting text, and a button.',
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
        story: 'Tile with no supporting content.',
      },
    },
  },
};

export const LongHeadline: Story = {
  args: {
    headline:
      'This is a very long headline meant to test how the component handles large amounts of text. It should wrap and display correctly across all screen sizes.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tile with a long headline to test text wrapping.',
      },
    },
  },
};

export const Empty: Story = {
  args: {
    children: null,
    headline: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tile with no headline or supporting content (empty state).',
      },
    },
  },
};
