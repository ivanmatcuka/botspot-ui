'use client';

import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { FC, useEffect, useMemo, useState } from 'react';
import { Menu } from '../Menu/Menu';
import { WP_REST_API_Post } from 'wp-types';
import { CustomPost } from '../../types/wordpress';

const LEGACY_OPTIONS = ['Scan Service', 'botspot'];

export type ProductsTopicProps = {
  onChange: (topic: string | null) => void;
  defaultProductName?: string;
  getProducts: () => Promise<{
    count: number;
    data: CustomPost[];
  }>;
};
export const ProductsTopic: FC<ProductsTopicProps> = ({
  defaultProductName,
  onChange,
  getProducts,
}) => {
  const [data, setData] = useState<WP_REST_API_Post[]>();
  const [topic, setTopic] = useState<string>('');

  const productNames = useMemo(
    () => data?.map((product) => product.title.rendered) ?? [],
    [data],
  );

  useEffect(() => {
    getProducts().then(({ data }) => {
      setData(data);
    });
  }, []);

  useEffect(() => {
    const defaultValue = defaultProductName ?? productNames?.[0] ?? '';
    setTopic(defaultValue);
    onChange(defaultValue);
  }, [defaultProductName, productNames]);

  return (
    <Box>
      <Menu label={topic} variant="topic">
        <FormGroup sx={{ px: 2, py: 1 }}>
          {[...productNames, ...LEGACY_OPTIONS].map((currTopic, index) => (
            <FormControlLabel
              control={<Checkbox checked={topic === currTopic} />}
              key={index}
              label={currTopic}
              onChange={() => {
                setTopic(currTopic);
                onChange(currTopic);
              }}
            />
          ))}
        </FormGroup>
      </Menu>
    </Box>
  );
};
