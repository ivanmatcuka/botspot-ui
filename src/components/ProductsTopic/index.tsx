'use client';

import { Menu } from '@botspot/ui';
import { Box, Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { FC, useEffect } from 'react';

export type ProductsTopicProps = {
  productNames: string[];
  topic: string;
  onChange: (topic: string | null) => void;
  defaultProductName: string;
};
export const ProductsTopic: FC<ProductsTopicProps> = ({
  defaultProductName,
  topic,
  onChange,
  productNames,
}) => {
  useEffect(() => {
    onChange(defaultProductName);
  }, [defaultProductName, productNames]);

  return (
    <Box>
      <Menu label={topic} variant="topic">
        <FormGroup sx={{ px: 2, py: 1 }}>
          {productNames.map((currTopic, index) => (
            <FormControlLabel
              control={<Checkbox checked={topic === currTopic} />}
              key={index}
              label={currTopic}
              onChange={(event) => onChange(event.currentTarget.nodeValue)}
            />
          ))}
        </FormGroup>
      </Menu>
    </Box>
  );
};
