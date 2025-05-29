import type { Meta, StoryObj } from '@storybook/react';

import { Box } from '@mui/material';

import { People, PeopleProps } from '../components/People';

const mockPeople = [
  {
    excerpt: 'Lead Engineer with a passion for robotics and AI.',
    featuredImage: 'https://randomuser.me/api/portraits/women/1.jpg',
    id: 1,
    title: 'Alice Johnson',
  },
  {
    excerpt: 'Creative Director and design systems expert.',
    featuredImage: 'https://randomuser.me/api/portraits/men/2.jpg',
    id: 2,
    title: 'Bob Smith',
  },
  {
    excerpt: 'Product Manager focused on user experience.',
    featuredImage: 'https://randomuser.me/api/portraits/women/3.jpg',
    id: 3,
    title: 'Carol Lee',
  },
];

const meta: Meta<PeopleProps> = {
  component: People,
  tags: ['autodocs'],
  title: 'Components/People',
  args: {
    people: mockPeople,
  },
  argTypes: {
    people: {
      control: false,
      description:
        'Array of people (each with excerpt, featuredImage, id, title).',
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
    <Box p={4}>
      <People {...args} people={args.people ?? []} />
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
    <Box p={4}>
      <People {...args} people={args.people ?? []} />
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
