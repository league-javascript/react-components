import React, { forwardRef } from 'react';
import { InputNumber, InputNumberProps } from 'antd';
import type { FieldFC, FieldProps as Props } from '../../typings';

export interface MoneyProps extends Omit<InputNumberProps, keyof Props>, Props<string | number> {
  locale?: string;
}

const Money: FieldFC<MoneyProps> = ({ defaultValue, readOnly, value, ...props }, ref) => {
  if (readOnly) {
    return <span ref={ref}>{value === undefined ? defaultValue : value}</span>;
  }

  return <InputNumber {...props} ref={ref} defaultValue={defaultValue} value={value} />;
};

export default forwardRef(Money);
