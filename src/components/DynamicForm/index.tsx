'use client';

import { Box, Paper } from '@mui/material';
import { FC, PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { ApiResponse, Field } from '../../utils/getForm';
import { Button } from '../Button';
import { Input } from '../Input';
import { useSnackbar } from '../Snackbar';

export type DynamicFormProps = PropsWithChildren<{
  formId?: number;
  frameless?: boolean;
  secondary?: boolean;
  submitForm: (formData: FormData, formId: number) => Promise<void>;
  getForm?: (formId: number) => Promise<ApiResponse | null>;
}>;
export const DynamicForm: FC<DynamicFormProps> = ({
  children,
  formId,
  frameless = false,
  secondary = false,
  submitForm,
  getForm,
}) => {
  const [fields, setFields] = useState<Field[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { showSnackbar } = useSnackbar();
  const { formState, handleSubmit, register, reset, watch, ...methods } =
    useForm();
  const { errors } = formState;

  useEffect(() => {
    if (!formId || !getForm) return;

    getForm(formId).then((form) => setFields(form?.fields ?? []));
  }, [formId, getForm]);

  const onSubmit = useCallback(() => {
    if (!formId) return;

    setIsLoading(true);
    const newFormData = new FormData();

    newFormData.append('_wpcf7_unit_tag', `${formId}`);

    fields.forEach((field) => {
      newFormData.append(`${field.raw_name}`, watch(field.raw_name));
    });

    // @TODO: fix
    if (watch('your-topic')) {
      newFormData.append('your-topic', watch('your-topic'));
    }

    submitForm(newFormData, formId)
      .then(() => showSnackbar('Thank you for your feedback!', 'success', 3000))
      .catch(() => showSnackbar('Something went wrong!', 'error', 3000))
      .finally(() => {
        setIsLoading(false);
        reset();
      });
  }, [showSnackbar, reset, watch, fields, formId]);

  if (!fields) return null;

  const renderField = (field: Field) => {
    const { basetype, labels, name, type } = field;
    const isRequired = type.includes('*');
    const label = labels[0] || name;

    return (
      <Input
        color={secondary ? 'white' : 'primary'}
        error={errors[name]}
        fullWidth={basetype === 'textarea'}
        key={name}
        label={label}
        name={name}
        register={register}
        required={isRequired}
        rules={isRequired ? { required: `${label} is required` } : undefined}
        type={basetype}
      />
    );
  };

  const content = (
    <FormProvider
      {...methods}
      handleSubmit={handleSubmit}
      watch={watch}
      formState={formState}
      register={register}
      reset={reset}
    >
      <Box
        display="flex"
        flexDirection="column"
        flexWrap="wrap"
        gap={3}
        alignItems={{ md: 'baseline', xs: 'center' }}
        p={frameless ? 0 : { md: 5, xs: 3 }}
        py={frameless ? 0 : { xs: 2 }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box width="100%">{children}</Box>
        <Box
          display="flex"
          flexWrap="wrap"
          gap={3}
          justifyContent={{ md: 'left', xs: 'center' }}
          rowGap={2}
          width="100%"
        >
          {fields.map((field) => renderField(field))}
        </Box>
        <Button disabled={isLoading} type="submit" variant="primary">
          Submit
        </Button>
      </Box>
    </FormProvider>
  );

  if (frameless) return content;

  return (
    <Paper
      className={`${secondary && '!bg-primary-main'} border-2 border-divider`}
      elevation={1}
    >
      {content}
    </Paper>
  );
};
