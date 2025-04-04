import { FC, PropsWithChildren, ReactEventHandler } from 'react';
type DialogProps = {
    onClose: ReactEventHandler;
    open: boolean;
    title?: string;
};
export declare const Dialog: FC<PropsWithChildren<DialogProps>>;
export {};
