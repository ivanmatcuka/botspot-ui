'use client';

import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from '@mui/material';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from './Button';
import { Input } from './Form';
import { Menu } from './Menu/Menu';

export const FORM_ID = 15422;

type DownloadFormProps = {
  defaultProductName?: string;
  isLoading: boolean;
  productNames: string[];
  onSubmit?: (formData: FormData) => void;
};
export const DownloadForm: FC<DownloadFormProps> = ({
  defaultProductName,
  isLoading,
  onSubmit,
  productNames,
}) => {
  const [topic, setTopic] = useState(defaultProductName || productNames[0]);

  const {
    formState: { errors },
    register,
    setValue,
    watch,
  } = useForm();

  const name = watch('your-name');
  const email = watch('your-email');

  const generateMessage = (topic: string) => `Datasheet for ${topic}.`;

  const formData = useMemo(() => {
    const formData = new FormData();

    formData.append('_wpcf7_unit_tag', `${FORM_ID}`);
    formData.append('your-name', name);
    formData.append('your-email', email);
    formData.append('your-subject', topic);

    return formData;
  }, [topic, name, email]);

  const changeTopic = useCallback(
    (topic: string) => () => {
      setValue('your-subject', generateMessage(topic));
      setTopic(topic);
    },
    [setValue],
  );

  useEffect(() => {
    setValue('your-subject', defaultProductName || productNames[0]);
  }, [defaultProductName, productNames, setValue]);

  return (
    <form>
      <Box p={0}>
        <Typography className="text-center md:text-left" mb={2} variant="h2">
          You are about to download the datasheet of
        </Typography>

        <Box>
          <Menu label={topic} variant="topic">
            <FormGroup sx={{ px: 2, py: 1 }}>
              {productNames.map((currTopic, index) => (
                <FormControlLabel
                  control={<Checkbox checked={topic === currTopic} />}
                  key={index}
                  label={currTopic}
                  onChange={changeTopic(currTopic)}
                />
              ))}
            </FormGroup>
          </Menu>
        </Box>

        <Typography className="text-center md:text-left" my={3} variant="body1">
          After filling out the details, we will take you to our exclusive
          download area.
        </Typography>

        <Grid
          justifyContent={{ md: 'left', xs: 'center' }}
          spacing={3}
          container
        >
          <Grid md={6} textAlign="left" xs={12} item>
            <Input
              error={errors['your-name']}
              key="name"
              label="Name"
              name="your-name"
              register={register}
              rules={{ required: 'Name is required' }}
              required
            />
          </Grid>
          <Grid md={6} textAlign="left" xs={12} item>
            <Input
              rules={{
                required: 'Email is required',
                pattern: {
                  message: 'Invalid email',
                  value: /\S+@\S+\.\S+/,
                },
              }}
              error={errors['your-email']}
              key="email"
              label="Email"
              name="your-email"
              register={register}
              required
            />
          </Grid>
          <Grid xs={12} item>
            <Button
              disabled={isLoading}
              onClick={() => onSubmit?.(formData)}
              variant="primary"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};
