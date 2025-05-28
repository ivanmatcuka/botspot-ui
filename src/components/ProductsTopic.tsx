'use client';

import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { FC, useEffect, useMemo, useState } from 'react';

import { CustomPost } from '../types';
import { Menu } from './Menu/Menu';

const LEGACY_OPTIONS = ['Scan Service', 'botspot'];

type ProductsReturnType = {
  count: number;
  data: CustomPost[];
};
export type ProductsTopicProps = {
  defaultProductName?: string;
  getProducts: () => Promise<ProductsReturnType>;
  onChange: (topic: string | null) => void;
};
export const ProductsTopic: FC<ProductsTopicProps> = ({
  defaultProductName,
  getProducts,
  onChange,
}) => {
  const [data, setData] = useState<CustomPost[]>();
  const [topic, setTopic] = useState<string>('');

  const productNames = useMemo(
    () => data?.map((product) => product.title.rendered) ?? [],
    [data],
  );

  useEffect(() => {
    getProducts().then(({ data }) => {
      setData(data);
    });
  }, [getProducts]);

  useEffect(() => {
    const defaultValue = defaultProductName ?? productNames?.[0] ?? '';
    setTopic(defaultValue);
    onChange(defaultValue);
  }, [defaultProductName, productNames, onChange]);

  const options = useMemo(
    () => [...productNames, ...LEGACY_OPTIONS],
    [productNames],
  );

  return (
    <Box>
      <Menu label={topic} variant="topic">
        <FormGroup sx={{ px: 2, py: 1 }}>
          {options.map((currTopic, index) => (
            <FormControlLabel
              onChange={() => {
                setTopic(currTopic);
                onChange(currTopic);
              }}
              control={<Checkbox checked={topic === currTopic} />}
              key={index}
              label={currTopic}
            />
          ))}
        </FormGroup>
      </Menu>
    </Box>
  );
};
