import { createTheme } from '@mui/material/styles';
import { getComponents } from './components';
import { palette } from './palette';
import { typography } from './typography';
const theme = createTheme({
    palette,
    typography,
    breakpoints: {
        values: {
            lg: 1024,
            md: 768,
            sm: 375,
            xl: 1280,
            xs: 0,
        },
    },
    shadows: [
        'none',
        '0px 36px 72px 0px rgba(22, 25, 79, 0.1)',
        ...Array(23).fill('none'),
    ],
    shape: {
        borderRadius: 8,
    },
});
theme.components = getComponents(theme);
theme.typography.h1 = {
    ...theme.typography.h1,
    [theme.breakpoints.down('xl')]: {
        fontSize: 40,
    },
};
export { theme };
