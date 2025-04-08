'use client';

import { FC } from 'react';

import { PageContainer, PageContainerProps } from '.';
import ThemeRegistry from '../../theme/ThemeRegistry';

export const StandalonePageContainer: FC<PageContainerProps> = (props) => (
  <ThemeRegistry>
    <PageContainer {...props} />
  </ThemeRegistry>
);
