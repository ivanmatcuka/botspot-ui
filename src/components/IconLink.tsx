import { Box } from '@mui/material';
import { FC } from 'react';

type IconLinkProps = {
  alt: string;
  href: string;
};
export const IconLink: FC<IconLinkProps> = ({ alt, href }) => (
  <Box position="relative">
    <img
      alt={alt}
      height={32}
      loading="lazy"
      src={`/link_${alt}.svg`}
      width={32}
    />
    <a
      className="absolute inset-0 opacity-0 hover:opacity-100"
      href={href}
      target="_blank"
    >
      <img
        alt={alt}
        height={32}
        loading="lazy"
        src={`/white_link_${alt}.svg`}
        width={32}
      />
    </a>
  </Box>
);
