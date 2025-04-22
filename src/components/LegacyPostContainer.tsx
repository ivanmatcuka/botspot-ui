'use client';

import { styled } from '@mui/material';
import { ThemedContainer } from './ThemedContainer';

export const LegacyPostContainer = styled(ThemedContainer)(({ theme }) => {
  const margins = {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),

    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
  };
  return {
    'div.MuiTypography-root *': {
      marginBottom: 0,
      marginTop: 0,
    },
    'h1, h2, h3, h4, h5': {
      '&:not(.MuiTypography-root)': margins,
    },
    hr: {
      borderColor: theme.palette.info.main,

      borderTopWidth: 1,
      marginBottom: theme.spacing(5),
    },
    p: {
      ...theme.typography.body1,
      ...margins,
    },
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  };
});
