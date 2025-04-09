import { GridProps } from '@mui/material';
import { FC, PropsWithChildren, ReactNode } from 'react';
export type PageContainerProps = {
    banner?: boolean;
    children: ReactNode;
} & Pick<GridProps, 'mb' | 'mt' | 'mx' | 'my' | 'm' | 'id'>;
export declare const PageContainer: FC<PropsWithChildren<PageContainerProps>>;
