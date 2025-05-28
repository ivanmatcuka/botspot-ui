import { Box, Typography } from '@mui/material';
import { FC, isValidElement, PropsWithChildren, ReactNode } from 'react';

export type SecondaryBlockProps = {
  headline?: ReactNode;
  sublineElement?: ReactNode;
};
export const SecondaryBlock: FC<PropsWithChildren<SecondaryBlockProps>> = ({
  children,
  headline,
  sublineElement,
}) => (
  <Box textAlign={{ md: 'left', xs: 'center' }}>
    <Typography variant="h2">{headline}</Typography>

    {/* Subline */}
    {isValidElement(sublineElement)
      ? sublineElement
      : sublineElement && (
          <Typography
            component="div"
            dangerouslySetInnerHTML={{ __html: sublineElement }}
            mb={{ sm: 2, xs: 3 }}
            mt={{ sm: 0.5, xs: 1 }}
            variant="body1"
          />
        )}

    {/* Optional children */}
    {!!children && (
      <Box
        alignItems={{ md: 'left', xs: 'center' }}
        display="flex"
        flexDirection={{ md: 'row', xs: 'column' }}
        gap={2}
      >
        {children}
      </Box>
    )}
  </Box>
);
