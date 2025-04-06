import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '.';
export default function ThemeRegistry({ children }) {
    return _jsx(ThemeProvider, { theme: theme, children: children });
}
