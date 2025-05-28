import type { Meta, StoryObj } from '@storybook/react';

import { Jobs, JobsProps } from '../components/Jobs';

const meta: Meta<JobsProps> = {
  component: Jobs,
  tags: ['autodocs'],
  title: 'Components/Jobs',
  args: {
    jobs: [
      {
        id: 101,
        title: { rendered: 'Innovation Creator (m/w/d)' },
        excerpt: {
          protected: false,
          rendered: 'Full-Time // Hybrid // Available ASAP',
        },
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
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'A single job posting.',
      },
    },
  },
};

export const MultipleJobs: Story = {
  args: {
    jobs: [
      {
        id: 101,
        title: { rendered: 'Innovation Creator (m/w/d)' },
        excerpt: {
          protected: false,
          rendered: 'Full-Time // Hybrid // Available ASAP',
        },
      },
      {
        id: 102,
        title: { rendered: 'Frontend Engineer' },
        excerpt: {
          protected: false,
          rendered: 'Full-Time // Remote // React/TypeScript',
        },
      },
      {
        id: 103,
        title: { rendered: 'Backend Developer' },
        excerpt: {
          protected: false,
          rendered: 'Full-Time // Onsite // Node.js/GraphQL',
        },
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
