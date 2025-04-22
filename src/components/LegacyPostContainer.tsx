'use client';

import { styled } from '@mui/material';
import { ThemedContainer } from './ThemedContainer';

export const LegacyPostContainer = styled(ThemedContainer)(({ theme }) => {
  const marginStyles = {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
    },
  };

  const applyMargins = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'div'].reduce(
    (acc: Record<string, unknown>, tag) => {
      acc[`& ${tag}:not(.MuiTypography-root)`] = marginStyles;
      acc[`& *:not(.MuiTypography-root) ${tag}`] = marginStyles;
      return acc;
    },
    {},
  );

  return {
    ...applyMargins,

    '& p:not(.MuiTypography-root), & *:not(.MuiTypography-root) p': {
      ...theme.typography.body1,
    },

    '& ul': {
      listStyle: 'initial',
    },

    '& hr': {
      borderColor: theme.palette.info.main,
      borderTopWidth: 1,
      marginBottom: theme.spacing(5),
    },

    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  };
});
