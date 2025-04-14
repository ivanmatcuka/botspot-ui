import type { Meta, StoryObj } from '@storybook/react';
import { ProductsTopic } from '../components/ProductsTopic';
import { CustomPost } from '../types/wordpress';

const mockProducts: CustomPost[] = [
  {
    id: 1,
    title: { rendered: '3D Scanner' },
    excerpt: { rendered: '<p>High precision scanning</p>' },
    slug: '3d-scanner',
  },
  {
    id: 2,
    title: { rendered: '3D Printer' },
    excerpt: { rendered: '<p>Print in ultra quality</p>' },
    slug: '3d-printer',
  },
];

const getMockProducts = async () => {
  return new Promise<{ count: number; data: CustomPost[] }>((resolve) =>
    setTimeout(
      () => resolve({ count: mockProducts.length, data: mockProducts }),
      500,
    ),
  );
};

const meta: Meta<typeof ProductsTopic> = {
  title: 'botspot/ProductsTopic',
  component: ProductsTopic,
  args: {
    defaultProductName: '3D Scanner',
    onChange: (val: string | null) => console.log('Selected topic:', val),
    getProducts: getMockProducts,
  },
  argTypes: {
    defaultProductName: {
      control: 'text',
      description: 'Name of the default product to show as selected',
    },
    onChange: {
      control: false,
      description: 'Callback when selection changes',
    },
    getProducts: {
      control: false,
      description: 'Function to fetch product data',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
