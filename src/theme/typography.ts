import { TypographyOptions } from '@mui/material/styles/createTypography';

export const typography = {
  fontFamily: 'Poppins',
  body1: {
    fontSize: 16,
    lineHeight: 1.4,
  },
  button: {
    fontSize: 16,
    lineHeight: '22.4px',
    textTransform: 'none',
  },
  caption: {
    fontSize: 12,
    lineHeight: 1.4,
  },
  h1: {
    fontSize: 60,
    fontWeight: 300,
    lineHeight: 1,
  },
  h2: {
    fontSize: 40,
    fontWeight: 300,
    lineHeight: 1.2,
  },
  h3: {
    fontSize: 32,
    fontWeight: 300,
    lineHeight: 1.2,
  },
  h4: {
    fontSize: 24,
    fontWeight: 300,
    lineHeight: 1.2,
  },
  h5: {
    fontSize: 20,
    fontWeight: 300,
    lineHeight: 1.2,
  },
} satisfies TypographyOptions;
