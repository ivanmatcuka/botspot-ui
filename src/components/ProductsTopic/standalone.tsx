'use client';

import { FC } from 'react';

import { ProductsTopic, ProductsTopicProps } from '.';
import ThemeRegistry from '../../theme/ThemeRegistry';

export const StandaloneProductsTopic: FC<ProductsTopicProps> = (props) => (
  <ThemeRegistry>
    <ProductsTopic {...props} />
  </ThemeRegistry>
);
