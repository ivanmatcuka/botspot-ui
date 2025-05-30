import type { Meta, StoryObj } from '@storybook/react';

import { Box } from '@mui/material';

import { People } from '../components/People';

const mockPeople = [
  {
    content: 'Bio for Alice Johnson',
    excerpt: 'Lead Engineer with a passion for robotics and AI.',
    featuredImage: 'https://randomuser.me/api/portraits/women/1.jpg',
    id: 1,
    title: 'Alice Johnson',
  },
  {
    content: 'Bio for Bob Smith',
    excerpt: 'Creative Director and design systems expert.',
    id: 2,
    title: 'Bob Smith',
  },
  {
    content: 'Bio for Carol Lee',
    excerpt: 'Product Manager focused on user experience.',
    featuredImage: 'https://randomuser.me/api/portraits/women/3.jpg',
    id: 3,
    title: 'Carol Lee',
  },
];

const meta: Meta = {
  component: People,
  tags: ['autodocs'],
  title: 'Components/People',
  args: {
    people: mockPeople,
  },
  argTypes: {
    people: {
      control: false,
      description: 'Array of people (CustomPost type).',
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'People displays a grid of people, each as a post tile with image, name, and excerpt.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Box sx={{ pb: 4, pl: 4, pt: 4 }}>
      <People people={args.people} />
    </Box>
  ),
  args: {
    people: mockPeople,
  },
  parameters: {
    docs: {
      description: {
        story: 'A grid of 3 people with images and bios.',
      },
    },
  },
};

export const Empty: Story = {
  render: (args) => (
    <Box sx={{ pb: 4, pl: 4, pt: 4 }}>
      <People people={args.people} />
    </Box>
  ),
  args: {
    people: [],
  },
  parameters: {
    docs: {
      description: {
        story: 'No people to display (empty state).',
      },
    },
  },
};
