import React, { forwardRef } from 'react';
import Digit, { DigitProps } from '../digit';
import type { FieldFC } from '../../typings';

export interface MoneyProps extends Omit<DigitProps, 'formatOptions'> {
  /** 货币代码，例如：CNY, USD */
  currency?: string;
  /** 货币显示格式  */
  currencyDisplay?: 'symbol' | 'narrowSymbol' | 'code' | 'name';
}

const Money: FieldFC<MoneyProps> = (
  { currency = 'CNY', currencyDisplay = 'narrowSymbol', precision = 2, ...props },
  ref,
) => (
  <Digit
    {...props}
    ref={ref}
    formatOptions={{
      style: 'currency',
      currency,
      currencyDisplay,
      minimumFractionDigits: precision,
    }}
    precision={precision}
  />
);

export default forwardRef(Money);
