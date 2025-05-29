import { Box } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

import { Field } from '../../utils/getForm';
import { Button } from '../Button';
import { DynamicFormField } from './DynamicFormField';

const SUBMITTING_MSG = 'Submitting...';
const SUBMIT_MSG = 'Submit';

export type DynamicFormContentProps = PropsWithChildren<{
  fields: Field[];
  frameless: boolean;
  isLoading: boolean;
  secondary: boolean;
  onSubmit: () => void;
}>;

export const DynamicFormContent: FC<DynamicFormContentProps> = ({
  children,
  fields,
  frameless,
  isLoading,
  onSubmit,
  secondary,
}) => (
  <Box
    alignItems={{ md: 'baseline', xs: 'center' }}
    component="form"
    display="flex"
    flexDirection="column"
    flexWrap="wrap"
    gap={3}
    onSubmit={onSubmit}
    p={frameless ? 0 : { md: 5, xs: 3 }}
    py={frameless ? 0 : { xs: 2 }}
  >
    {children && <Box width="100%">{children}</Box>}
    <Box
      display="flex"
      flexWrap="wrap"
      gap={3}
      justifyContent={{ md: 'left', xs: 'center' }}
      rowGap={2}
      width="100%"
    >
      {fields.map((field) => (
        <DynamicFormField
          field={field}
          key={field.name}
          secondary={secondary}
        />
      ))}
    </Box>
    <Button disabled={isLoading} type="submit" variant="primary">
      {isLoading ? SUBMITTING_MSG : SUBMIT_MSG}
    </Button>
  </Box>
);
