import { Theme } from '@mui/material';

import { palette } from './palette';

export const getComponents = (theme: Theme) => ({
  MuiAccordion: {
    defaultProps: {
      disableGutters: true,
    },
    styleOverrides: {
      root: {
        boxShadow: 'none',

        '&:before': {
          display: 'none',
        },
      },
    },
  },
  MuiAccordionSummary: {
    styleOverrides: {
      root: {
        '&:hover': {
          color: palette.primary.main,
        },
      },
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        border: 'solid',
        borderWidth: '0.1em',
        padding: theme.spacing(1.5, 2.5),

        '&:disabled': {
          backgroundColor: palette.grey[200],
          borderColor: palette.common.white,
          color: palette.common.white,
        },
      },
      sizeSmall: {
        padding: theme.spacing(1, 2),
      },
      text: {
        border: 'none',

        '&:disabled': {
          backgroundColor: palette.grey[100],
          border: 'none',
          color: palette.common.black,
        },
        '&:hover': {
          backgroundColor: 'transparent',
          color: palette.primary.main,
        },
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        alignItems: 'center',
        borderRadius: theme.spacing(2),
        padding: theme.spacing(8, 2),
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        maxWidth: 648,
        width: '100%',
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        borderColor: palette.grey[200],
      },
    },
  },
  MuiList: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        border: 'none',
        '&:hover': {
          color: palette.primary.main,
        },
      },
    },
  },
  MuiMenuItem: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        borderRadius: theme.shape.borderRadius,

        padding: 0,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      notchedOutline: {
        borderWidth: 2,
      },
    },
  },
  MuiPagination: {
    styleOverrides: {
      root: {
        '.MuiPagination-ul': {
          gap: theme.spacing(3),
          justifyContent: 'flex-start',

          [theme.breakpoints.down('xl')]: {
            gap: theme.spacing(1),
            justifyContent: 'space-evenly',
          },
        },
      },
    },
  },
});
