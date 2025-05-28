import type { Meta, StoryObj } from '@storybook/react';

import { People, PeopleProps } from '../components/People';

const mockPeople = Array.from({ length: 6 }, (_, i) => ({
  _embedded: {},
  content: { rendered: `Full bio for person ${i + 1}` },
  date: new Date().toISOString(),
  excerpt: { rendered: `Bio for person ${i + 1}` },
  featured_media: null,
  id: i + 1,
  slug: `person-${i + 1}`,
  title: { rendered: `Person ${i + 1}` },
}));

const meta: Meta<PeopleProps> = {
  component: People,
  tags: ['autodocs'],
  title: 'Components/People',
  args: {
    people: mockPeople,
  },
  argTypes: {
    people: { control: false, description: 'Array of people (WP posts).' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'People displays a grid of people, each as a post tile with image, title, and excerpt.',
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
        story: 'A grid of 6 people.',
      },
    },
  },
};

export const Empty: Story = {
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
