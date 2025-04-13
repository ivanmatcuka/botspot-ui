import { FC } from 'react';
export type ProductsTopicProps = {
    productNames: string[];
    topic: string;
    onChange: (topic: string | null) => void;
    defaultProductName: string;
};
export declare const ProductsTopic: FC<ProductsTopicProps>;
