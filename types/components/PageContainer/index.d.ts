import { GridProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
export type PageContainerProps = PropsWithChildren<{
    banner?: boolean;
}> & Pick<GridProps, 'pb' | 'pt' | 'mx' | 'my' | 'm' | 'id' | 'bgcolor' | 'mt' | 'mb' | 'my'>;
export declare const PageContainer: FC<PageContainerProps>;
