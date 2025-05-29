import { FC } from 'react';
import { CustomPost } from '../types';
type ProductsReturnType = {
    count: number;
    data: CustomPost[];
};
export type ProductsTopicProps = {
    defaultProductName?: string;
    getProducts: () => Promise<ProductsReturnType>;
    onChange: (topic: string | null) => void;
};
export declare const ProductsTopic: FC<ProductsTopicProps>;
export {};
