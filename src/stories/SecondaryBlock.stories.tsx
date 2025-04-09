import type { Meta, StoryObj } from '@storybook/react';

import {
  SecondaryBlock,
  SecondaryBlockProps,
} from '../components/SecondaryBlock';

const meta: Meta<SecondaryBlockProps> = {
  component: SecondaryBlock,
  title: 'botspot/SecondaryBlock',
  args: {
    headline: 'Ready to Take the Next Step?',
    primary: {
      href: '#',
      value: 'Get Started',
    },
    secondary: {
      href: '#',
      value: 'Learn More',
    },
    sublineElement:
      'Boost your business with <strong>custom solutions</strong> that scale.',
  },
  argTypes: {
    headline: {
      control: 'text',
      description: 'Main headline (can be JSX or string)',
    },
    primary: {
      control: 'object',
      description: 'Primary CTA button',
    },
    secondary: {
      control: 'object',
      description: 'Secondary CTA button',
    },
    sublineElement: {
      control: 'text',
      description:
        'HTML string or ReactNode displayed under the headline (supports bold, links, etc.)',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
