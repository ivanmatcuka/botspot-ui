import { BoxProps, GridProps } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
type GridPick = Pick<GridProps, 'id' | 'm' | 'mx' | 'my'>;
type BoxPick = Pick<BoxProps, 'pb' | 'pt' | 'mt' | 'mb' | 'my' | 'py' | 'bgcolor'>;
export type PageContainerProps = {
    banner?: boolean;
} & (BoxPick & GridPick);
export declare const PageContainer: FC<PropsWithChildren<PageContainerProps>>;
export {};
