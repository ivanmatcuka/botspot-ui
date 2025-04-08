import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '@mui/material';

import {
  PageContainer,
  PageContainerProps,
} from '../components/PageContainer/';

const meta: Meta<PageContainerProps> = {
  component: PageContainer,
  tags: ['autodocs'],
  title: 'botspot/PageContainer',
  args: {
    banner: false,
    mb: { md: 10, xs: 5 },
    mt: { md: 4, xs: 2 },
    children: (
      <Typography variant="h4">
        This is content inside the <strong>PageContainer</strong>.
      </Typography>
    ),
  },
  argTypes: {
    banner: {
      control: 'boolean',
      description: 'Adjusts layout and grid width for banner-like appearance',
    },
    children: {
      control: 'text',
    },
    mb: {
      control: 'object',
      description: 'Bottom margin values (responsive)',
    },
    mt: {
      control: 'object',
      description: 'Top margin values (responsive)',
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
    banner: false,
  },
};
