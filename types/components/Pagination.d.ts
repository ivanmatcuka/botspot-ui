import { FC } from 'react';
export type PaginationProps = {
    count: number;
    perPage: number;
    setPage: (page: number) => void;
};
export declare const Pagination: FC<PaginationProps>;
