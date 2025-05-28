import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '@mui/material';

import { DynamicForm, DynamicFormProps } from '../components/DynamicForm';

const mockFields = [
  {
    basetype: 'text',
    labels: ['Name'],
    name: 'name',
    raw_name: 'name',
    type: 'text*',
  },
  {
    basetype: 'email',
    labels: ['Email'],
    name: 'email',
    raw_name: 'email',
    type: 'email*',
  },
  {
    basetype: 'textarea',
    labels: ['Message'],
    name: 'message',
    raw_name: 'message',
    type: 'textarea',
  },
];

const mockGetForm = async (formId: number) => ({
  fields: mockFields,
});

const mockSubmitForm = async (formData: FormData, formId: number) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
};

const meta: Meta<DynamicFormProps> = {
  component: DynamicForm,
  tags: ['autodocs'],
  title: 'Components/DynamicForm',
  args: {
    children: <Typography variant="h6">Contact Us</Typography>,
    formId: 1,
    frameless: false,
    getForm: mockGetForm,
    secondary: false,
    submitForm: mockSubmitForm,
  },
  argTypes: {
    getForm: { control: false, description: 'Function to fetch form fields.' },
    children: {
      control: false,
      description: 'Content to display above the form fields.',
    },
    formId: {
      control: 'number',
      description: 'ID of the form to fetch fields for.',
    },
    frameless: {
      control: 'boolean',
      description: 'Removes Paper wrapper if true.',
    },
    secondary: {
      control: 'boolean',
      description: 'Use secondary color scheme.',
    },
    submitForm: {
      control: false,
      description: 'Function to handle form submission.',
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'DynamicForm is a flexible form component that fetches its fields from an API and handles submission. It supports custom content above the fields, frameless mode, and a secondary color scheme. Use the controls to explore all features and states.',
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
        story:
          'A dynamic contact form with name, email, and message fields. Shows a snackbar on submit.',
      },
    },
  },
};

export const Frameless: Story = {
  args: {
    frameless: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Form without the Paper wrapper for seamless embedding.',
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    secondary: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Form using the secondary color scheme for alternate backgrounds.',
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
        story: 'Form without any content above the fields.',
      },
    },
  },
};

export const NoFields: Story = {
  args: {
    getForm: async () => ({ fields: [] }),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Form with no fields (empty state). Useful for testing loading and error states.',
      },
    },
  },
};
