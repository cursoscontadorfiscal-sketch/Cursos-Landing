import { InputHTMLAttributes } from 'react';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: InputSize;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}
