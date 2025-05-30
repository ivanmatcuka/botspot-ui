/**
 * Post displays a single post tile with a title, excerpt, featured image, and optional children.
 * Figma reference: https://www.figma.com/file/
 */

import { Box, Typography } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

const OUTER_BOX_CLASSES =
  'relative rounded-lg text-white overflow-hidden h-full min-h-[360px]';
const INNER_BOX_CLASSES =
  'bg-common-black !bg-opacity-80 w-full text-center z-10';
const TITLE_CLASSES = 'line-clamp-2 !text-white';
const EXCERPT_CLASSES = 'line-clamp-3';
const IMAGE_BASE_CLASSES = 'w-full h-full absolute inset-0 object-top';
const FEATURED_IMAGE_DEFAULT =
  'https://lightwidget.com/wp-content/uploads/localhost-file-not-found-480x480.avif';

export type PostProps = {
  excerpt?: string;
  featuredImage?: string;
  objectFit?: 'cover' | 'contain';
  title: string;
  titleVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
};
export const Post: FC<PropsWithChildren<PostProps>> = ({
  children,
  excerpt,
  featuredImage = FEATURED_IMAGE_DEFAULT,
  objectFit = 'cover',
  title,
  titleVariant = 'h4',
}) => {
  const featuredImageClasses = `${IMAGE_BASE_CLASSES} ${
    objectFit === 'cover' ? 'object-cover' : 'object-contain'
  }`;
  return (
    <Box alignItems="flex-end" className={OUTER_BOX_CLASSES} display="flex">
      <Box
        alignItems="center"
        className={INNER_BOX_CLASSES}
        display="flex"
        flexDirection="column"
        gap={1}
        p={2}
      >
        <Typography
          className={TITLE_CLASSES}
          component="h3"
          dangerouslySetInnerHTML={{ __html: title }}
          mb={excerpt ? 0 : 1}
          variant={titleVariant}
        />
        {excerpt && (
          <Typography
            className={EXCERPT_CLASSES}
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
          className={featuredImageClasses}
          loading="lazy"
          src={featuredImage}
        />
      )}
    </Box>
  );
};
