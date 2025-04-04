import { GridProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
type PageContainerProps = {
    banner?: boolean;
} & Pick<GridProps, 'mb' | 'mt' | 'mx' | 'my' | 'm' | 'id'>;
export declare const PageContainer: FC<PropsWithChildren<PageContainerProps>>;
export {};
