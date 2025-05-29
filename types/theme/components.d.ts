import { Theme } from '@mui/material';
export declare const getComponents: (theme: Theme) => {
    MuiAccordion: {
        defaultProps: {
            disableGutters: boolean;
        };
        styleOverrides: {
            root: {
                boxShadow: string;
                '&:before': {
                    display: string;
                };
            };
        };
    };
    MuiAccordionSummary: {
        styleOverrides: {
            root: {
                '&:hover': {
                    color: string;
                };
            };
        };
    };
    MuiButton: {
        defaultProps: {
            disableElevation: boolean;
            disableRipple: boolean;
        };
        styleOverrides: {
            root: {
                border: string;
                borderWidth: string;
                padding: string;
                '&:disabled': {
                    backgroundColor: string;
                    borderColor: string;
                    color: string;
                };
            };
            sizeSmall: {
                padding: string;
            };
            text: {
                border: string;
                '&:disabled': {
                    backgroundColor: string;
                    border: string;
                    color: string;
                };
                '&:hover': {
                    backgroundColor: string;
                    color: string;
                };
            };
        };
    };
    MuiDialog: {
        styleOverrides: {
            paper: {
                alignItems: string;
                borderRadius: string;
                padding: string;
            };
        };
    };
    MuiDialogTitle: {
        styleOverrides: {
            root: {
                maxWidth: number;
                width: string;
            };
        };
    };
    MuiDivider: {
        styleOverrides: {
            root: {
                borderColor: string;
            };
        };
    };
    MuiList: {
        styleOverrides: {
            root: {
                padding: number;
            };
        };
    };
    MuiListItem: {
        styleOverrides: {
            root: {
                padding: number;
            };
        };
    };
    MuiListItemButton: {
        styleOverrides: {
            root: {
                border: string;
                '&:hover': {
                    color: string;
                };
            };
        };
    };
    MuiMenuItem: {
        defaultProps: {
            disableRipple: boolean;
        };
        styleOverrides: {
            root: {
                borderRadius: number;
                padding: number;
            };
        };
    };
    MuiOutlinedInput: {
        styleOverrides: {
            notchedOutline: {
                borderWidth: number;
            };
        };
    };
    MuiPagination: {
        styleOverrides: {
            root: {
                '.MuiPagination-ul': {
                    [x: string]: string | {
                        gap: string;
                        justifyContent: string;
                    };
                    gap: string;
                    justifyContent: string;
                };
            };
        };
    };
};
