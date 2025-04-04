import { FC, PropsWithChildren } from 'react';
export declare const SnackbarContext: import("react").Context<{
    showSnackbar: (message: string, status: "success" | "error", duration?: number) => void;
}>;
export declare const SnackbarProvider: FC<PropsWithChildren>;
export declare const useSnackbar: () => {
    showSnackbar: (message: string, status: "success" | "error", duration?: number) => void;
};
