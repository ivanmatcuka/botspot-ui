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
    children: {
      control: 'text',
      description: 'Button text',
    },
    className: {
      control: 'text',
      description: 'Extra CSS classes',
    },
    disabled: {
      control: 'boolean',
      description: 'If the button is disabled',
    },
    href: {
      control: 'text',
      description: 'Link to another page',
    },
    target: {
      control: 'select',
      options: ['_self', '_blank', '_parent', '_top'],
      description: 'HTML target aatribute',
    },
    type: {
      control: 'select',
      options: ['submit', 'reset', 'button'],
      description: 'HTML button type',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'menu', 'menuItem', 'topic'],
      description: 'Button variant based on the design system',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
