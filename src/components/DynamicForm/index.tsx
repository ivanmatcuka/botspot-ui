'use client';

import { Box, Paper } from '@mui/material';
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { ApiResponse, Field } from '../../utils/getForm';
import { useSnackbar } from '../Snackbar';
import { DynamicFormContent } from './DynamicFormContent';

const NO_FIELDS_MSG = 'No fields to display.';
const LOADING_FORM_MSG = 'Loading form...';
const SNACKBAR_SUCCESS_MSG = 'Thank you for your feedback!';
const SNACKBAR_ERROR_MSG = 'Something went wrong!';

export type DynamicFormProps = PropsWithChildren<{
  formId?: number;
  frameless?: boolean;
  secondary?: boolean;
  getForm?: (formId: number) => Promise<ApiResponse | null>;
  submitForm: (formData: FormData, formId: number) => Promise<void>;
}>;
export const DynamicForm: FC<DynamicFormProps> = ({
  children,
  formId,
  frameless = false,
  getForm,
  secondary = false,
  submitForm,
}) => {
  const [fields, setFields] = useState<Field[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const { showSnackbar } = useSnackbar();
  const form = useForm();
  const { formState, handleSubmit, reset, watch } = form;

  /**
   * DynamicForm is a flexible form component that fetches its fields from an API and handles submission.
   * Supports custom content above the fields, frameless mode, and a secondary color scheme.
   * Shows loading, empty, and error states for better UX.
   */

  // Fetch fields
  useEffect(() => {
    if (!formId || !getForm) return;

    setFetchError(null);
    setFields([]);

    getForm(formId)
      .then((form) => setFields(form?.fields ?? []))
      .catch(() => setFetchError('Failed to load form fields.'));
  }, [formId, getForm]);

  // Improved submit handler
  const onSubmit = async () => {
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

    try {
      await submitForm(newFormData, formId);
      showSnackbar(SNACKBAR_SUCCESS_MSG, 'success', 3000);
      reset();
    } catch {
      showSnackbar(SNACKBAR_ERROR_MSG, 'error', 3000);
    } finally {
      setIsLoading(false);
    }
  };

  // Loading, error, and empty states
  if (fetchError) {
    return (
      <Box color="error.main" p={3} textAlign="center">
        {fetchError}
      </Box>
    );
  }

  if (!fields.length && !isLoading) {
    return (
      <Box p={3} textAlign="center">
        {NO_FIELDS_MSG}
      </Box>
    );
  }

  if (isLoading && !fields.length) {
    return (
      <Box p={3} textAlign="center">
        {LOADING_FORM_MSG}
      </Box>
    );
  }

  const formBox = (
    <FormProvider {...form} formState={formState}>
      <DynamicFormContent
        fields={fields}
        frameless={frameless}
        isLoading={isLoading}
        onSubmit={handleSubmit(onSubmit)}
        secondary={secondary}
      >
        {children}
      </DynamicFormContent>
    </FormProvider>
  );

  if (frameless) return formBox;

  return (
    <Paper
      className={`${secondary && '!bg-primary-main'} border-2 border-divider`}
      elevation={1}
    >
      {formBox}
    </Paper>
  );
};
