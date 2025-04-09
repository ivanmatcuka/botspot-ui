import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '@mui/material';

import { Button } from '../components/Button';
import { GalleryTile, GalleryTileProps } from '../components/GalleryTile/index';

const meta: Meta<GalleryTileProps> = {
  component: GalleryTile,
  title: 'botspot/GalleryTile',
  args: {
    alt: 'Placeholder image',
    bgColor: 'grey.100',
    imgUrl: 'https://picsum.photos/id/237/400/200',
    children: (
      <>
        <Typography variant="h5" gutterBottom>
          Gallery Tile Heading
        </Typography>
        <Typography variant="body1" paragraph>
          This is a description block inside the tile. Use it to highlight
          features or content alongside the image.
        </Typography>
        <Button variant="primary">Learn More</Button>
      </>
    ),
  },
  argTypes: {
    alt: {
      control: 'text',
      description: 'Alternative text for the image',
    },
    bgColor: {
      control: 'text',
      description: 'Background color (MUI theme color or CSS value)',
    },
    imgUrl: {
      control: 'text',
      description: 'Image source URL',
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
