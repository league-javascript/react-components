import React, { ForwardRefRenderFunction, forwardRef } from 'react';
import { Input, InputProps } from 'antd';
import type { FieldProps } from '../../typings';

export type TextProps = Omit<InputProps, keyof FieldProps> & FieldProps<string>;

const Text: ForwardRefRenderFunction<any, TextProps> = ({ mode, value, ...props }, ref) => {
  if (mode === 'edit') {
    return <Input allowClear autoComplete="off" {...props} ref={ref} value={value} />;
  }

  return <>{value}</>;
};

export default forwardRef(Text);
