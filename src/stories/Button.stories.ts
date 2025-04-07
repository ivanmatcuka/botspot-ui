import type { Meta, StoryObj } from '@storybook/react';

import type { ButtonProps } from '../components/Button';

import { Button } from '../components/Button';

const meta: Meta<ButtonProps> = {
  component: Button,
  tags: ['autodocs'],
  title: 'botspot/Button',
  args: {
    children: 'Button',
    className: 'css-classes',
    disabled: false,
    href: '#',
    target: '_blank',
    type: 'button',
    variant: 'primary',
  },
  argTypes: {
    className: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
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
  args: {},
};
