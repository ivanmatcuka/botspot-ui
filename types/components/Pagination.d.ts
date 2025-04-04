import { FC } from 'react';
type PaginationProps = {
    count: number;
    perPage: number;
    setPage: (page: number) => void;
};
export declare const Pagination: FC<PaginationProps>;
export {};
