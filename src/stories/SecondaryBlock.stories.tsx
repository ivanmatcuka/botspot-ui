import type { Meta, StoryObj } from '@storybook/react';

import { PropsWithChildren } from 'react';

import { Button } from '../components/Button';
import {
  SecondaryBlock,
  SecondaryBlockProps,
} from '../components/SecondaryBlock';

const meta: Meta<PropsWithChildren<SecondaryBlockProps>> = {
  component: SecondaryBlock,
  tags: ['autodocs'],
  title: 'Components/SecondaryBlock',
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
    children: {
      control: false,
      description: 'Content to display below the headline and subline.',
    },
    headline: {
      control: 'text',
      description: 'Main headline (can be JSX or string).',
    },
    sublineElement: {
      control: 'text',
      description:
        'HTML string or ReactNode displayed under the headline (supports bold, links, etc.).',
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'SecondaryBlock is a flexible section for call-to-actions, headlines, and supporting content. Use the controls to explore all features and states.',
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
        story: 'A secondary block with headline, subline, and two buttons.',
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
        story:
          'Secondary block with no children (no buttons or extra content).',
      },
    },
  },
};

export const LongSubline: Story = {
  args: {
    sublineElement:
      'This is a very long subline meant to test how the component handles large amounts of text. It should wrap and display correctly across all screen sizes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary block with a long subline to test text wrapping.',
      },
    },
  },
};

export const Empty: Story = {
  args: {
    children: null,
    headline: '',
    sublineElement: '',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Secondary block with no headline, subline, or children (empty state).',
      },
    },
  },
};
