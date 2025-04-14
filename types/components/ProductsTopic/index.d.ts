import { FC } from 'react';
import { CustomPost } from '../../types/wordpress';
export type ProductsTopicProps = {
    onChange: (topic: string | null) => void;
    defaultProductName: string;
    getProducts: () => Promise<{
        count: number;
        data: CustomPost[];
    }>;
};
export declare const ProductsTopic: FC<ProductsTopicProps>;
