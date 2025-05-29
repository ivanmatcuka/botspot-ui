/**
 * A gallery component for displaying 3D iframes or other content. Supports transparent or opaque backgrounds.
 * Figma reference: https://www.figma.com/file
 */
import { Box } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export const EMPTY_STATE_MSG = 'No gallery items to display.';

export type GalleryProps = {
  transparent?: boolean;
};
export const Gallery: FC<PropsWithChildren<GalleryProps>> = ({
  children,
  transparent = true,
}) => {
  const isEmpty =
    !children || (Array.isArray(children) && children.length === 0);

  return (
    <Box
      alignItems="center"
      bgcolor={transparent ? 'transparent' : 'grey.100'}
      borderRadius={1}
      columnGap={{ md: 2, xs: 0 }}
      display="flex"
      flexDirection={{ md: 'row', xs: 'column' }}
      justifyContent="center"
      minHeight={isEmpty ? 240 : undefined}
      mx="auto"
      py={3}
      rowGap={{ md: 0, xs: 2 }}
    >
      {isEmpty ? (
        <Box color="grey.500" textAlign="center" width="100%">
          {EMPTY_STATE_MSG}
        </Box>
      ) : (
        children
      )}
    </Box>
  );
};
