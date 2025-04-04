'use client';

import { Container, styled } from '@mui/material';

export const ThemedContainer = styled(Container)(({ theme }) => ({
  h1: {
    ...theme.typography.h2,
  },
  'h1, h2, h3, h4, h5, p': {
    marginBottom: theme.spacing(3),

    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
    },
  },
  h2: {
    ...theme.typography.h3,
  },
  h3: {
    ...theme.typography.h4,
  },
  h4: {
    ...theme.typography.h5,
  },
  h5: {
    ...theme.typography.h5,
  },
  hr: {
    borderColor: theme.palette.info.main,

    borderTopWidth: 1,
    marginBottom: theme.spacing(5),
  },
  p: {
    ...theme.typography.body1,
    marginBottom: theme.spacing(6),

    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(3),
    },
  },
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
  ul: {
    listStyle: 'initial',
  },
}));
