import { CustomPost } from '../types/wordpress';
export declare const getProductsFunction: (url: string) => () => Promise<{
    count: number;
    data: CustomPost[];
}>;
