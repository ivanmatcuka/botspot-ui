import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/Button';
import { Post } from '../components/Post';

const meta: Meta<typeof Post> = {
  component: Post,
  tags: ['autodocs'],
  title: 'Components/Post',
  args: {
    children: <Button variant="primary">Read More</Button>,
    excerpt: 'This is a short excerpt for the post.',
    featuredImage: 'https://picsum.photos/id/1015/1200/400',
    objectFit: 'cover',
    title: 'Sample Post Title',
    titleVariant: 'h4',
  },
  argTypes: {
    excerpt: { control: 'text', description: 'Post excerpt (HTML allowed).' },
    title: { control: 'text', description: 'Post title (HTML allowed).' },
    children: {
      control: false,
      description: 'Content to display below the excerpt.',
    },
    featuredImage: {
      control: 'text',
      description: 'URL of the featured image.',
    },
    objectFit: {
      control: 'select',
      description: 'Image object-fit style.',
      options: ['cover', 'contain'],
    },
    titleVariant: {
      control: 'select',
      description: 'Typography variant for the title.',
      options: ['h1', 'h2', 'h3', 'h4', 'h5'],
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Post displays a single post tile with a title, excerpt, featured image, and optional children. The titleVariant prop controls the heading level.',
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
        story: 'A post with title, excerpt, image, and a button.',
      },
    },
  },
};

export const TitleAsH2: Story = {
  args: {
    titleVariant: 'h2',
  },
  parameters: {
    docs: {
      description: {
        story: 'A post with the title rendered as an h2 heading.',
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
        story: 'A post with no excerpt.',
      },
    },
  },
};

export const NoImage: Story = {
  args: {
    featuredImage: '',
  },
  parameters: {
    docs: {
      description: {
        story: 'A post with no featured image.',
      },
    },
  },
};

export const ContainImage: Story = {
  args: {
    objectFit: 'contain',
  },
  parameters: {
    docs: {
      description: {
        story: 'A post with the image set to object-fit contain.',
      },
    },
  },
};

export const NoChildren: Story = {
  args: {
    children: null,
  },
  parameters: {
    docs: {
      description: {
        story: 'A post with no children (no button or extra content).',
      },
    },
  },
};
