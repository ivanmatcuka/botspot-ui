import { GridProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
export type PageContainerProps = PropsWithChildren<{
    banner?: boolean;
}> & Pick<GridProps, 'id' | 'pb' | 'pt' | 'm' | 'mx' | 'my' | 'mt' | 'mb' | 'my' | 'py' | 'bgcolor'>;
export declare const PageContainer: FC<PageContainerProps>;
