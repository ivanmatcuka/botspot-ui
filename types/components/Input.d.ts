import { InputProps as MuiInputProps } from '@mui/material';
import { FC } from 'react';
import { FieldValues, UseControllerProps, UseFormRegister } from 'react-hook-form';
export type InputProps = {
    color?: 'primary' | 'white';
    error?: FieldValues;
    label?: string;
    register: UseFormRegister<FieldValues>;
} & Pick<MuiInputProps, 'fullWidth' | 'required' | 'value' | 'type' | 'rows' | 'className'> & Pick<UseControllerProps, 'name' | 'rules'>;
export declare const Input: FC<InputProps>;
