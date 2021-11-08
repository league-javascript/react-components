import React, { forwardRef, useContext, useMemo } from 'react';
import { InputNumber, InputNumberProps } from 'antd';
import { ConfigContext } from 'antd/lib/config-provider';
import type { FieldFC, FieldProps as Props } from '../../typings';

export interface MoneyProps extends Omit<InputNumberProps, keyof Props>, Props<string | number> {
  /** 语言代码，例如：zh-cn, en-us */
  locale?: string;
  /** 货币代码，例如：CNY, USD */
  currency?: string;
  /** 货币显示格式  */
  currencyDisplay?: 'symbol' | 'narrowSymbol' | 'code' | 'name';
}

const Money: FieldFC<MoneyProps> = (
  {
    currency = 'CNY',
    currencyDisplay = 'narrowSymbol',
    defaultValue,
    locale: customizeLocale,
    plain: _,
    precision = 2,
    readOnly,
    value,
    ...props
  },
  ref,
) => {
  const config = useContext(ConfigContext);
  const locale = customizeLocale !== undefined ? customizeLocale : config.locale?.locale;

  const numberFormat = useMemo(
    () =>
      new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        currencyDisplay,
        minimumFractionDigits: precision,
      }),
    [locale, currency, currencyDisplay, precision],
  );

  const parser = (val: string | undefined) => {
    if (!val) {
      return 0;
    }

    const localeNumberFormat = new Intl.NumberFormat(locale);

    // detecting and parsing between comma and dot
    const group = localeNumberFormat.format(1111).replace(/1/g, '');
    const decimal = localeNumberFormat.format(1.1).replace(/1/g, '');

    return val
      .replace(new RegExp(`\\${group}`, 'g'), '')
      .replace(new RegExp(`\\${decimal}`, 'g'), '.')
      .replace(/[^0-9.]/g, '');
  };

  if (readOnly) {
    return (
      <span ref={ref}>
        {numberFormat.format((value === undefined ? defaultValue : value) as number)}
      </span>
    );
  }

  return (
    <InputNumber
      {...props}
      ref={ref}
      defaultValue={defaultValue}
      formatter={numberFormat.format as InputNumberProps['formatter']}
      parser={parser}
      value={value}
    />
  );
};

export default forwardRef(Money);
