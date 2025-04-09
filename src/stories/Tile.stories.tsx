import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '@mui/material';

import { Button } from '../components/Button';
import { Tile, TileProps } from '../components/Tile';

const meta: Meta<TileProps> = {
  component: Tile,
  title: 'botspot/Tile',
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
    headline: {
      control: 'text',
      description: 'Main heading text displayed on the left',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
