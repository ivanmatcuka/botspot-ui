import { FC } from 'react';
import { CustomPost } from '../../types/wordpress';
export type ProductsListProps = {
    products: CustomPost[];
    scrollable: boolean;
};
export declare const ProductsList: FC<ProductsListProps>;
