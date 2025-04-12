'use client';

import { Box, Typography } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

type PostProps = PropsWithChildren<{
  excerpt?: string;
  featuredImage?: string;
  objectFit?: 'cover' | 'contain';
  title: string;
}>;

export const Post: FC<PostProps> = ({
  children,
  excerpt,
  featuredImage,
  objectFit = 'cover',
  title,
}) => (
  <Box
    alignItems="flex-end"
    className="relative rounded-lg text-white overflow-hidden h-full min-h-[360px]"
    display="flex"
  >
    <Box
      alignItems="center"
      className="bg-common-black bg-opacity-80 w-full text-center z-10"
      display="flex"
      flexDirection="column"
      gap={1}
      p={2}
    >
      <Typography
        className="line-clamp-2"
        component="h3"
        dangerouslySetInnerHTML={{ __html: title ?? '' }}
        mb={excerpt ? 0 : 1}
        variant="h4"
      />
      {excerpt && (
        <Typography
          className="line-clamp-3"
          component="div"
          dangerouslySetInnerHTML={{ __html: excerpt }}
          mb={1}
          variant="body1"
        />
      )}
      {children}
    </Box>
    {featuredImage && (
      <img
        alt=""
        className={`w-full h-full absolute inset-0 ${objectFit === 'cover' ? 'object-cover' : 'object-contain'} object-top`}
        height={1000}
        loading="lazy"
        src={featuredImage}
        width={1000}
      />
    )}
  </Box>
);
