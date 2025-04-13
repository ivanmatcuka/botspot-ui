'use client';

import { FC } from 'react';

import { DynamicForm, DynamicFormProps } from '.';
import ThemeRegistry from '../../theme/ThemeRegistry';

export const StandaloneDynamicForm: FC<DynamicFormProps> = (props) => (
  <ThemeRegistry>
    <DynamicForm {...props} />
  </ThemeRegistry>
);
