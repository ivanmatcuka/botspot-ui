import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import { Field } from '../../utils/getForm';
import { Input } from '../Input';

export const DynamicFormField: FC<{ field: Field; secondary?: boolean }> = ({
  field,
  secondary,
}) => {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  const { basetype, labels, name, type } = field;
  const isRequired = type.includes('*');
  const label = labels[0] || name;

  return (
    <Input
      color={secondary ? 'white' : 'primary'}
      error={errors[name]}
      fullWidth={basetype === 'textarea'}
      label={label}
      name={name}
      register={register}
      required={isRequired}
      rules={isRequired ? { required: `${label} is required` } : undefined}
      type={basetype}
    />
  );
};
