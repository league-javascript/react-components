import React, { ForwardRefRenderFunction, forwardRef } from 'react';
import { Input } from 'antd';
import type { FieldProps } from '../../typings';
import type { PasswordProps as InputProps } from 'antd/lib/input';

export type PasswordProps = InputProps & FieldProps<string>;

const Password: ForwardRefRenderFunction<unknown, PasswordProps> = (
  { value, mode, ...props },
  ref,
) => {
  if (mode === 'edit') {
    return <Input.Password allowClear {...props} ref={ref} value={value} />;
  }

  return <>{value}</>;
};

export default forwardRef(Password);
