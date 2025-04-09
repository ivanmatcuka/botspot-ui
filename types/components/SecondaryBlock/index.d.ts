import { FC, ReactNode } from 'react';
export type SecondaryBlockProps = {
    headline?: ReactNode;
    sublineElement?: ReactNode;
    primary?: {
        href: string;
        value: string;
    };
    secondary?: {
        href: string;
        value: string;
    };
};
export declare const SecondaryBlock: FC<SecondaryBlockProps>;
