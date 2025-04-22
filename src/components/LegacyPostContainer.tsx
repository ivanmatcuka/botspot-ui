'use client';

import { styled } from '@mui/material';
import { ThemedContainer } from './ThemedContainer';

export const LegacyPostContainer = styled(ThemedContainer)(({ theme }) => ({
  '*:not(.MuiTypography-root)': {
    p: {
      ...theme.typography.body1,
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
    ul: {
      listStyle: 'initial',
    },
    'h1, h2, h3, h4, h5, p': {
      marginBottom: theme.spacing(3),

      [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(2),
      },
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  },
  hr: {
    borderColor: theme.palette.info.main,

    borderTopWidth: 1,
    marginBottom: theme.spacing(5),
  },
}));
