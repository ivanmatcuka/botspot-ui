import type { Meta, StoryObj } from '@storybook/react';

import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';

import { Input, InputProps } from '../components/Input';

const meta: Meta<InputProps> = {
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
  args: {
    color: 'primary',
    error: undefined,
    fullWidth: true,
    label: 'Label',
    name: 'input',
    required: false,
    rows: 1,
    rules: undefined,
    type: 'text',
    value: undefined,
  },
  argTypes: {
    label: { control: 'text', description: 'Label for the input.' },
    name: { control: 'text', description: 'Input name (form field key).' },
    rows: { control: 'number', description: 'Number of rows (for textarea).' },
    value: { control: 'text', description: 'Input value.' },
    color: {
      control: 'select',
      description: 'Color scheme.',
      options: ['primary', 'white'],
    },
    error: {
      control: false,
      description: 'Error object from react-hook-form.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'If true, input takes full width.',
    },
    register: {
      control: false,
      description: 'register function from react-hook-form.',
    },
    required: {
      control: 'boolean',
      description: 'If true, input is required.',
    },
    rules: {
      control: false,
      description: 'Validation rules for react-hook-form.',
    },
    type: {
      control: 'select',
      description: 'Input type.',
      options: ['text', 'email', 'textarea', 'password'],
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Input is a styled form field component supporting text, email, textarea, and password types. Integrates with react-hook-form for validation and error display.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<InputProps>;

const Template = (args: InputProps) => {
  const { formState, register } = useForm();
  return (
    <Box width={400}>
      <Input
        {...args}
        error={formState.errors[args.name]}
        register={register}
      />
    </Box>
  );
};
const TemplateWithError = (args: InputProps) => {
  const { register } = useForm();
  return (
    <Box width={400}>
      <Input
        {...args}
        error={{ message: 'This field is required.' }}
        register={register}
      />
    </Box>
  );
};

export const Default: Story = {
  args: {},
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'A standard text input field.',
      },
    },
  },
};

export const Email: Story = {
  render: Template,
  args: {
    label: 'Email',
    name: 'email',
    type: 'email',
  },
  parameters: {
    docs: {
      description: {
        story: 'An email input field.',
      },
    },
  },
};

export const Textarea: Story = {
  render: Template,
  args: {
    label: 'Message',
    name: 'message',
    rows: 4,
    type: 'textarea',
  },
  parameters: {
    docs: {
      description: {
        story: 'A textarea input field.',
      },
    },
  },
};

export const WhiteColor: Story = {
  render: Template,
  args: {
    color: 'white',
    label: 'White Label',
  },
  parameters: {
    docs: {
      description: {
        story: 'Input with white color scheme.',
      },
    },
  },
};

export const WithError: Story = {
  render: TemplateWithError,
  args: {
    label: 'With Error',
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Input field displaying an error message.',
      },
    },
  },
};
