import React, { ForwardRefRenderFunction, forwardRef } from 'react';
import { InputNumber, InputNumberProps } from 'antd';
import type { FieldProps } from '../../typings';

export interface MoneyProps extends InputNumberProps<number>, FieldProps<number> {
  locale?: string;
}

const Money: ForwardRefRenderFunction<any, MoneyProps> = ({ mode, value, ...props }, ref) => {
  if (mode === 'edit') {
    return <InputNumber {...props} ref={ref} value={value} />;
  }

  return <>{value}</>;
};

export default forwardRef(Money);
