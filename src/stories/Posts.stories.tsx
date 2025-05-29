import type { Meta, StoryObj } from '@storybook/react';

import { Posts, PostsProps } from '../components/Posts';

const meta: Meta<PostsProps> = {
  component: Posts,
  tags: ['autodocs'],
  title: 'Components/Posts',
  args: {
    hidePagination: false,
    list: false,
    perPage: 3,
  },
  argTypes: {
    perPage: { control: 'number', description: 'Number of posts per page.' },
    hidePagination: {
      control: 'boolean',
      description: 'Hide the pagination controls.',
    },
    list: {
      control: 'boolean',
      description: 'Display posts in a list layout.',
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Posts displays a paginated list or grid of posts. Use the controls to explore all features and states.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Mock getPosts function for testing/demo purposes
const mockGetPosts = async (page = 1, perPage = 3) => {
  const total = 13;

  const allPosts = Array.from({ length: total }, (_, i) => ({
    blocks: [],
    content: `Full content for post ${i + 1}`,
    excerpt: `Excerpt for post ${i + 1}`,
    featuredImage: 'https://picsum.photos/id/237/400/200',
    id: i + 1,
    info: {},
    slug: `post-title-${i + 1}`,
    title: `Post Title ${i + 1}`,
  }));

  const start = (page - 1) * perPage;
  const end = start + perPage;

  return {
    count: total,
    data: allPosts.slice(start, end),
  };
};

export const Default: Story = {
  args: {
    getPosts: mockGetPosts,
  },
  parameters: {
    docs: {
      description: {
        story: 'Default posts grid with pagination.',
      },
    },
  },
};

export const ListLayout: Story = {
  args: {
    getPosts: mockGetPosts,
    list: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Posts displayed in a list layout.',
      },
    },
  },
};

export const WithoutPagination: Story = {
  args: {
    getPosts: mockGetPosts,
    hidePagination: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Posts grid without pagination controls.',
      },
    },
  },
};

export const Empty: Story = {
  args: {
    posts: [],
    getPosts: async () => ({ count: 0, data: [] }),
  },
  parameters: {
    docs: {
      description: {
        story: 'No posts to display (empty state).',
      },
    },
  },
};
