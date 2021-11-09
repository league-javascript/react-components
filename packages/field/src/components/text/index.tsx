import React, { forwardRef } from 'react';
import { Input, InputProps } from 'antd';
import type { FieldFC, FieldProps as Props } from '../../typings';

export type TextProps = Omit<InputProps, keyof Props> & Props<string>;

const Text: FieldFC<TextProps> = ({ defaultValue, plain: _, readOnly, value, ...props }, ref) => {
  if (readOnly) {
    return <span ref={ref}>{value === undefined ? defaultValue : value}</span>;
  }

  return (
    <Input
      allowClear
      autoComplete="off"
      {...props}
      ref={ref}
      defaultValue={defaultValue}
      value={value}
    />
  );
};

export default forwardRef(Text);
