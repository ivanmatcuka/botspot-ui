'use client';

import { FC } from 'react';

import { ProductsList, ProductsListProps } from '.';
import ThemeRegistry from '../../theme/ThemeRegistry';

export const StandaloneProductsList: FC<ProductsListProps> = (props) => (
  <ThemeRegistry>
    <ProductsList {...props} />
  </ThemeRegistry>
);
