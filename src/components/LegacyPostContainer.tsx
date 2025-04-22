'use client';

import { styled } from '@mui/material';
import { ThemedContainer } from './ThemedContainer';

export const LegacyPostContainer = styled(ThemedContainer)(({ theme }) => ({
  '& *:not(.MuiTypography-root) p': {
    ...theme.typography.body1,
  },

  '& *:not(.MuiTypography-root) h1, & *:not(.MuiTypography-root) h2, & *:not(.MuiTypography-root) h3, & *:not(.MuiTypography-root) h4, & *:not(.MuiTypography-root) h5, & *:not(.MuiTypography-root) p':
    {
      marginBottom: theme.spacing(3),

      [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(2),
      },
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
}));
