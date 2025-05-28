'use client';

import {
  Box,
  Pagination as MuiPagination,
  PaginationRenderItemParams,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { FC, ReactEventHandler, useCallback } from 'react';

import { Button } from './Button';

export type PaginationProps = {
  count: number;
  perPage: number;
  setPage: (page: number) => void;
};
export const Pagination: FC<PaginationProps> = ({
  count,
  perPage,
  setPage,
}) => {
  const { breakpoints } = useTheme();
  const matches = useMediaQuery(breakpoints.down('xl'));

  const renderItem = useCallback(
    ({
      disabled,
      onClick,
      page,
      selected,
      type,
    }: PaginationRenderItemParams) => {
      const contentType: Record<
        typeof type,
        {
          buttonText: string;
          onClick?: ReactEventHandler;
        }
      > = {
        'end-ellipsis': {
          buttonText: '...',
        },
        first: {
          buttonText: '<<',
          onClick: () => setPage(1),
        },
        last: {
          buttonText: '>>',
          onClick: () => setPage(Math.ceil(count / perPage)),
        },
        next: {
          buttonText: '>',
          onClick: () => setPage((page ?? 1) + 1),
        },
        page: {
          buttonText: `${page}`,
          onClick,
        },
        previous: {
          buttonText: '<',
          onClick: () => setPage((page ?? 1) - 1),
        },
        'start-ellipsis': {
          buttonText: '...',
        },
      };

      if (type !== 'page') {
        return (
          <Button disabled={disabled} onClick={onClick} variant="secondary">
            {contentType[type].buttonText}
          </Button>
        );
      }

      return (
        <Button
          disabled={disabled}
          onClick={onClick}
          variant={selected ? 'primary' : 'secondary'}
        >
          {page}
        </Button>
      );
    },
    [count, perPage, setPage],
  );

  return (
    <Box>
      <MuiPagination
        boundaryCount={matches ? 0 : 1}
        color="primary"
        count={count}
        onChange={(_, page) => setPage(page)}
        renderItem={renderItem}
        shape="rounded"
        siblingCount={matches ? 0 : 1}
        variant="outlined"
      />
    </Box>
  );
};
