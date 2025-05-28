import type { Meta, StoryObj } from '@storybook/react';

import { Box, Typography } from '@mui/material';
import { useState } from 'react';

import { Pagination, PaginationProps } from '../components/Pagination';

const meta: Meta<PaginationProps> = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
  args: {
    count: 13,
    perPage: 3,
  },
  argTypes: {
    count: { control: 'number', description: 'Total number of items.' },
    perPage: { control: 'number', description: 'Items per page.' },
    setPage: {
      control: false,
      description: 'Callback to set the current page.',
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Pagination provides navigation for paginated content, supporting custom button rendering and responsive layout.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template = (args: any) => {
  const [page, setPage] = useState(1);
  return (
    <Box>
      <Typography mb={2}>Current page: {page}</Typography>
      <Pagination {...args} setPage={setPage} />
    </Box>
  );
};

export const Default: Story = {
  args: {},
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Pagination with 13 items and 3 per page.',
      },
    },
  },
};

export const ManyPages: Story = {
  render: Template,
  args: {
    count: 50,
    perPage: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with 50 items and 5 per page.',
      },
    },
  },
};

export const OnePage: Story = {
  render: Template,
  args: {
    count: 3,
    perPage: 5,
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with only one page.',
      },
    },
  },
};

export const LargePerPage: Story = {
  render: Template,
  args: {
    count: 20,
    perPage: 20,
  },
  parameters: {
    docs: {
      description: {
        story: 'Pagination with all items on a single page.',
      },
    },
  },
};
