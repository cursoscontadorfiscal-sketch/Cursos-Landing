import { TextareaHTMLAttributes } from 'react';

export type TextareaSize = 'sm' | 'md' | 'lg';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  size?: TextareaSize;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  resize?: boolean;
}
