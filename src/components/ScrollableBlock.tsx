'use client';

import { PageContainer } from '@/components/PageContainer';
import { Box } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { ScrollableVideo } from './ScrollableVideo';

type ScrollableBlockProps = {
  imagesUrls?: string[];
};
export const ScrollableBlock: FC<PropsWithChildren<ScrollableBlockProps>> = ({
  children,
  imagesUrls,
}) => {
  return (
    <>
      <ScrollableVideo imagesUrls={imagesUrls} />
      <Box>
        <PageContainer>{children}</PageContainer>
      </Box>
    </>
  );
};
