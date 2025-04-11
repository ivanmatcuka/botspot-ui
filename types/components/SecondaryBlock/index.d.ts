import { FC, ReactNode } from 'react';
export type SecondaryBlockProps = {
    headline?: ReactNode;
    sublineElement?: ReactNode;
    children?: ReactNode;
};
export declare const SecondaryBlock: FC<SecondaryBlockProps>;
