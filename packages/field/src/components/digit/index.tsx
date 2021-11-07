import React, { forwardRef } from 'react';
import { InputNumber, InputNumberProps } from 'antd';
import type { FieldFC, FieldProps as Props } from '../../typings';

export interface DigitProps extends Omit<InputNumberProps, keyof Props>, Props<string | number> {}

const Digit: FieldFC<DigitProps> = ({ defaultValue, readOnly, value, ...props }, ref) => {
  if (readOnly) {
    return <span ref={ref}>{value === undefined ? defaultValue : value}</span>;
  }

  return <InputNumber min={0} {...props} ref={ref} defaultValue={defaultValue} value={value} />;
};

export default forwardRef(Digit);
