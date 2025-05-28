import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

import { PageContainer, PageContainerProps } from '../components/PageContainer';

const meta: Meta<PropsWithChildren<PageContainerProps>> = {
  component: PageContainer,
  tags: ['autodocs'],
  title: 'Components/PageContainer',
  args: {
    banner: false,
    bgcolor: 'white',
    pb: { md: 10, xs: 5 },
    pt: { md: 10, xs: 5 },
    children: (
      <Typography variant="h4">
        This is content inside the <strong>PageContainer</strong>.
      </Typography>
    ),
  },
  argTypes: {
    banner: {
      control: 'boolean',
      description: 'Adjusts layout and grid width for banner-like appearance.',
    },
    bgcolor: {
      control: 'text',
      description: 'Background color (MUI theme color or CSS value).',
    },
    pb: {
      control: 'object',
      description: 'Bottom margin values (responsive).',
    },
    pt: {
      control: 'object',
      description: 'Top margin values (responsive).',
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'PageContainer is a layout component for consistent page padding, background, and responsive spacing. Use the controls to explore all features and states.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    banner: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'A standard page container with default padding and background.',
      },
    },
  },
};

export const BannerMode: Story = {
  args: {
    banner: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'PageContainer in banner mode for wider layouts.',
      },
    },
  },
};

export const NoPadding: Story = {
  args: {
    pb: 0,
    pt: 0,
  },
  parameters: {
    docs: {
      description: {
        story: 'PageContainer with no top or bottom padding.',
      },
    },
  },
};

export const CustomBg: Story = {
  args: {
    bgcolor: 'grey.100',
  },
  parameters: {
    docs: {
      description: {
        story: 'PageContainer with a custom background color.',
      },
    },
  },
};
