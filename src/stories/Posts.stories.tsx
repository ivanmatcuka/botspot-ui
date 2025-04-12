import type { Meta, StoryObj } from '@storybook/react';
import { WP_REST_API_Post } from 'wp-types';
import { Posts, PostsProps } from '../components/Posts';

const mockPosts: Pick<
  WP_REST_API_Post,
  'excerpt' | 'id' | 'title' | 'slug' | '_embedded'
>[] = [
  {
    id: 1,
    title: { rendered: 'Intro to 3D Modeling' },
    slug: 'intro-3d-modeling',
    excerpt: {
      rendered: '<p>Learn the basics of 3D modeling in this guide.</p>',
      protected: false,
    },
  },
  {
    id: 2,
    title: { rendered: 'Rendering Techniques' },
    slug: 'rendering-techniques',
    excerpt: {
      rendered: '<p>Improve your rendering with these pro tips.</p>',
      protected: false,
    },
  },
  {
    id: 3,
    title: { rendered: 'Rendering Techniques' },
    slug: 'rendering-techniques',
    excerpt: {
      rendered: '<p>Improve your rendering with these pro tips.</p>',
      protected: false,
    },
  },
  {
    id: 4,
    title: { rendered: 'Rendering Techniques' },
    slug: 'rendering-techniques',
    excerpt: {
      rendered: '<p>Improve your rendering with these pro tips.</p>',
      protected: false,
    },
  },
  {
    id: 5,
    title: { rendered: 'Rendering Techniques' },
    slug: 'rendering-techniques',
    excerpt: {
      rendered: '<p>Improve your rendering with these pro tips.</p>',
      protected: false,
    },
  },
];

const meta: Meta<PostsProps> = {
  title: 'botspot/Posts',
  tags: ['autodocs'],
  component: Posts,
  args: {
    posts: mockPosts,
    loading: false,
    list: false,
    count: Math.ceil(mockPosts.length / 3),
    perPage: 3,
    hidePagination: false,
    setPage: (page: number) => console.log('Set page to:', page),
  },
  argTypes: {
    posts: { control: false },
    loading: { control: 'boolean' },
    list: { control: 'boolean' },
    perPage: { control: 'number' },
    count: { control: 'number' },
    hidePagination: { control: 'boolean' },
    setPage: { control: false },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Loading: Story = {
  args: {
    loading: true,
  },
};
export const ListLayout: Story = {
  args: {
    list: true,
  },
};
export const WithoutPagination: Story = {
  args: {
    hidePagination: true,
  },
};
