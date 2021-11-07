import React, { forwardRef } from 'react';
import { Input } from 'antd';
import type { FieldFC, FieldProps as Props } from '../../typings';
import type { PasswordProps as InputProps } from 'antd/lib/input';

export interface PasswordProps extends Omit<InputProps, keyof Props>, Props<string> {}

const Password: FieldFC<PasswordProps> = ({ defaultValue, readOnly, value, ...props }, ref) => {
  if (readOnly) {
    return <span ref={ref}>{value === undefined ? defaultValue : value}</span>;
  }

  return (
    <Input.Password allowClear {...props} ref={ref} defaultValue={defaultValue} value={value} />
  );
};

export default forwardRef(Password);
