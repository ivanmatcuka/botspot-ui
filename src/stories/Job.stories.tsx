import type { Meta, StoryObj } from '@storybook/react';

import { Job, JobProps } from '../components/Job';

const meta: Meta<JobProps> = {
  component: Job,
  tags: ['autodocs'],
  title: 'Components/Job',
  args: {
    excerpt: 'Full-Time // Hybrid // Available ASAP',
    slug: '101',
    title: 'Innovation Creator (m/w/d)',
  },
  argTypes: {
    slug: { control: 'text', description: 'Job post ID.' },
    title: { control: 'text', description: 'Job title.' },
    excerpt: {
      control: 'text',
      description: 'Short job description or meta info.',
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Job displays a single job posting with a title, excerpt, and a call-to-action button.',
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
        story: 'A single job posting with a title, excerpt, and button.',
      },
    },
  },
};

export const LongExcerpt: Story = {
  args: {
    excerpt:
      'Full-Time // Hybrid // Available ASAP<br>We are looking for a creative, motivated individual to join our team and help us innovate in the field of 3D scanning and automation. You will work with a dynamic team and have opportunities for growth.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Job posting with a long, multi-line excerpt.',
      },
    },
  },
};

export const NoExcerpt: Story = {
  args: {
    excerpt: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'Job posting with no excerpt (empty state for description).',
      },
    },
  },
};
