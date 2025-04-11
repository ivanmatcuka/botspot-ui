import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/Button';
import {
  SecondaryBlock,
  SecondaryBlockProps,
} from '../components/SecondaryBlock';

const meta: Meta<SecondaryBlockProps> = {
  component: SecondaryBlock,
  tags: ['autodocs'],
  title: 'botspot/SecondaryBlock',
  args: {
    headline: 'Ready to Take the Next Step?',
    children: (
      <>
        <Button href="#" variant="primary">
          Get Started
        </Button>
        <Button href="#" variant="secondary">
          Learn More
        </Button>
      </>
    ),
    sublineElement:
      'Boost your business with <strong>custom solutions</strong> that scale.',
  },
  argTypes: {
    headline: {
      control: 'text',
      description: 'Main headline (can be JSX or string)',
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
