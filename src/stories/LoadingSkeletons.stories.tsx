import type { Meta, StoryObj } from '@storybook/react';

import { Grid } from '@mui/material';

import { LoadingSkeletons } from '../components/LoadingSkeletons';

const meta: Meta<{ count?: number }> = {
  component: LoadingSkeletons,
  tags: ['autodocs'],
  title: 'Components/LoadingSkeletons',
  args: {
    count: 12,
  },
  argTypes: {
    count: {
      control: 'number',
      description: 'Number of skeleton tiles to display.',
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'LoadingSkeletons displays a grid of skeleton placeholders, useful for loading states in galleries or lists.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template = (args: { count?: number }) => (
  <Grid spacing={2} container>
    <LoadingSkeletons {...args} />
  </Grid>
);

export const Default: Story = {
  args: {},
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Displays 12 skeleton tiles in a responsive grid.',
      },
    },
  },
};

export const FewSkeletons: Story = {
  render: Template,
  args: {
    count: 3,
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays only 3 skeleton tiles.',
      },
    },
  },
};

export const ManySkeletons: Story = {
  render: Template,
  args: {
    count: 24,
  },
  parameters: {
    docs: {
      description: {
        story: 'Displays 24 skeleton tiles for large loading states.',
      },
    },
  },
};
