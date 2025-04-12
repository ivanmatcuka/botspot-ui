import type { Meta, StoryObj } from '@storybook/react';
import { Jobs, JobsProps } from '../components/Jobs';

const meta: Meta<JobsProps> = {
  title: 'botspot/Jobs',
  component: Jobs,
  tags: ['autodocs'],
  args: {
    jobs: [
      {
        id: 101,
        title: { rendered: 'Innovation Creator (m/w/d)' },
        excerpt: {
          rendered: 'Full-Time // Hybrid // Available ASAP',
          protected: false,
        },
      },
    ],
  },
  argTypes: {
    jobs: {
      control: false,
      description: 'Array of WordPress job posts',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
