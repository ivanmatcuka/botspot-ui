import type { Meta, StoryObj } from '@storybook/react';
import { Posts, PostsProps } from '../components/Posts';

const meta: Meta<PostsProps> = {
  title: 'botspot/Posts',
  tags: ['autodocs'],
  component: Posts,
  args: {
    list: false,
    perPage: 3,
    hidePagination: false,
  },
  argTypes: {
    list: { control: 'boolean' },
    perPage: { control: 'number' },
    hidePagination: { control: 'boolean' },
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
