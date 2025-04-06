import type { ButtonProps } from '@/components/Button'; // adjust import to match location
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/Button/standalone';

const meta: Meta<ButtonProps> = {
  component: Button,
  tags: ['autodocs'],
  title: 'Example/Button',
  args: {
    children: 'Button',
    disabled: false,
    prefetch: false,
    variant: 'primary',
  },
  argTypes: {
    className: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
    target: {
      control: 'select',
      options: ['_self', '_blank', '_parent', '_top'],
    },
    type: {
      control: 'select',
      options: ['submit', 'reset', 'button'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'menu', 'menuItem', 'topic'],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};
