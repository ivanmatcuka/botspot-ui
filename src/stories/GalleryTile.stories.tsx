import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '@mui/material';

import { Button } from '../components/Button';
import { GalleryTile, GalleryTileProps } from '../components/GalleryTile';

const meta: Meta<GalleryTileProps> = {
  component: GalleryTile,
  tags: ['autodocs'],
  title: 'Components/GalleryTile',
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
      description: 'Alternative text for the image.',
    },
    bgColor: {
      control: 'text',
      description: 'Background color (MUI theme color or CSS value).',
    },
    children: {
      control: false,
      description: 'Content to display inside the tile.',
    },
    imgUrl: {
      control: 'text',
      description: 'Image source URL.',
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'GalleryTile is a flexible tile component for galleries, featuring an image, background color, and custom content. Use the controls to explore all features and states.',
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
          'A gallery tile with a placeholder image, grey background, and heading, description, and button content.',
      },
    },
  },
};

export const CustomBackground: Story = {
  args: {
    bgColor: 'primary.main',
  },
  parameters: {
    docs: {
      description: {
        story: 'Gallery tile with a primary color background.',
      },
    },
  },
};

export const NoImage: Story = {
  args: {
    imgUrl: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Gallery tile with no image.',
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
        story: 'Gallery tile with no content inside.',
      },
    },
  },
};
