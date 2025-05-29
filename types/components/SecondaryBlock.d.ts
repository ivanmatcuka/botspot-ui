import { FC, PropsWithChildren, ReactNode } from 'react';
export type SecondaryBlockProps = {
    headline?: ReactNode;
    sublineElement?: ReactNode;
};
export declare const SecondaryBlock: FC<PropsWithChildren<SecondaryBlockProps>>;
