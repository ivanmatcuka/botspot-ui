import type { Meta, StoryObj } from '@storybook/react';

import { Box } from '@mui/material';

import { Jobs, JobsProps } from '../components/Jobs';

const meta: Meta<JobsProps> = {
  component: Jobs,
  tags: ['autodocs'],
  title: 'Components/Jobs',
  args: {
    jobs: [
      {
        excerpt: 'Full-Time // Hybrid // Available ASAP',
        slug: '101',
        title: 'Innovation Creator (m/w/d)',
      },
    ],
  },
  argTypes: {
    jobs: {
      control: false,
      description: 'Array of WordPress job posts.',
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Jobs displays a list of job postings. Each job includes a title and an excerpt. Use the stories to preview different job list states.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Box p={4}>
      <Jobs {...args} jobs={args.jobs} />
    </Box>
  ),
  args: {
    jobs: [
      {
        content: 'Role description for Innovation Creator',
        excerpt: 'Full-Time // Hybrid // Available ASAP',
        id: 101,
        title: 'Innovation Creator (m/w/d)',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'A single job posting.',
      },
    },
  },
};

export const MultipleJobs: Story = {
  render: (args) => (
    <Box p={4}>
      <Jobs {...args} jobs={args.jobs} />
    </Box>
  ),
  args: {
    jobs: [
      {
        content: 'Role description for Innovation Creator',
        excerpt: 'Full-Time // Hybrid // Available ASAP',
        slug: '101',
        title: 'Innovation Creator (m/w/d)',
      },
      {
        content: 'Role description for Frontend Engineer',
        excerpt: 'Full-Time // Remote // React/TypeScript',
        slug: '102',
        title: 'Frontend Engineer',
      },
      {
        content: 'Role description for Backend Developer',
        excerpt: 'Full-Time // Onsite // Node.js/GraphQL',
        slug: '103',
        title: 'Backend Developer',
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'A list of multiple job postings.',
      },
    },
  },
};

export const NoJobs: Story = {
  render: (args) => (
    <Box p={4}>
      <Jobs {...args} jobs={args.jobs} />
    </Box>
  ),
  args: {
    jobs: [],
  },
  parameters: {
    docs: {
      description: {
        story: 'No jobs available (empty state).',
      },
    },
  },
};
