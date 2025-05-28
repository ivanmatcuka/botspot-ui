import type { Meta, StoryObj } from '@storybook/react';

import type { ButtonProps } from '../components/Button';

import { Button } from '../components/Button';

const meta: Meta<ButtonProps> = {
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
  args: {
    children: 'Button',
    className: '',
    disabled: false,
    endIconName: undefined,
    href: undefined,
    startIconName: undefined,
    target: undefined,
    type: 'button',
    variant: 'primary',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The content of the button.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for custom styling.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button if true.',
    },
    endIconName: {
      control: 'select',
      description: 'Name of the icon to display at the end.',
      options: [
        'ExpandLess',
        'ExpandMore',
        'Facebook',
        'Instagram',
        'LinkedIn',
        'Twitter',
        'X',
        undefined,
      ],
    },
    href: {
      control: 'text',
      description: 'If set, renders the button as a link.',
    },
    startIconName: {
      control: 'select',
      description: 'Name of the icon to display at the start.',
      options: [
        'ExpandLess',
        'ExpandMore',
        'Facebook',
        'Instagram',
        'LinkedIn',
        'Twitter',
        'X',
        undefined,
      ],
    },
    target: {
      control: 'select',
      description: 'Specifies where to open the linked document.',
      options: ['_self', '_blank', '_parent', '_top'],
    },
    type: {
      control: 'select',
      description: 'The button type attribute.',
      options: ['submit', 'reset', 'button'],
    },
    variant: {
      control: 'select',
      description: 'Visual style of the button.',
      options: ['primary', 'secondary', 'outline', 'menu', 'menuItem', 'topic'],
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A versatile button component supporting multiple variants, icons, and link behavior. Use the controls to explore all features.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    className: '',
    disabled: false,
    endIconName: undefined,
    href: undefined,
    startIconName: undefined,
    target: undefined,
    type: 'button',
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story:
          'The default button. Use the controls to change its appearance and behavior.',
      },
    },
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'The primary button is used for main actions.',
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story: 'The secondary button is used for less prominent actions.',
      },
    },
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Button',
    variant: 'outline',
  },
  parameters: {
    docs: {
      description: {
        story: 'Outline buttons are used for neutral or alternative actions.',
      },
    },
  },
};

export const Menu: Story = {
  args: {
    children: 'Menu Button',
    variant: 'menu',
  },
  parameters: {
    docs: {
      description: {
        story: 'Menu buttons are used in navigation or dropdown menus.',
      },
    },
  },
};

export const MenuItem: Story = {
  args: {
    children: 'Menu Item Button',
    variant: 'menuItem',
  },
  parameters: {
    docs: {
      description: {
        story: 'Menu item buttons are used inside menu lists.',
      },
    },
  },
};

export const Topic: Story = {
  args: {
    children: 'Topic Button',
    variant: 'topic',
  },
  parameters: {
    docs: {
      description: {
        story: 'Topic buttons are styled for topic/category navigation.',
      },
    },
  },
};

export const WithStartIcon: Story = {
  args: {
    children: 'With Start Icon',
    startIconName: 'LinkedIn',
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with a start icon.',
      },
    },
  },
};

export const WithEndIcon: Story = {
  args: {
    children: 'With End Icon',
    endIconName: 'ExpandMore',
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button with an end icon.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'A disabled button cannot be interacted with.',
      },
    },
  },
};

export const AsLink: Story = {
  args: {
    children: 'Button as Link',
    href: 'https://botspot.de',
    target: '_blank',
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Button rendered as a link using the href prop.',
      },
    },
  },
};
