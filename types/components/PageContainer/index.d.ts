import { BoxProps, GridProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
type GridPick = Pick<GridProps, 'id' | 'm' | 'mx' | 'my'>;
type BoxPick = Pick<BoxProps, 'pb' | 'pt' | 'mt' | 'mb' | 'my' | 'py' | 'bgcolor'>;
export type PageContainerProps = PropsWithChildren<{
    banner?: boolean;
}> & GridPick & BoxPick;
export declare const PageContainer: FC<PageContainerProps>;
export {};
