import React, { forwardRef, useContext, useMemo } from 'react';
import { InputNumber, InputNumberProps } from 'antd';
import { ConfigContext } from 'antd/lib/config-provider';
import type { FieldFC, FieldProps as Props } from '../../typings';

export interface DigitProps extends Omit<InputNumberProps, keyof Props>, Props<string | number> {
  /** 格式化选项 */
  formatOptions?: Intl.NumberFormatOptions;
  /** 语言代码，例如：zh-cn, en-us */
  locale?: string;
}

const Digit: FieldFC<DigitProps> = (
  { defaultValue, formatOptions, locale: customizeLocale, plain: _, readOnly, value, ...props },
  ref,
) => {
  const config = useContext(ConfigContext);
  const locale = customizeLocale !== undefined ? customizeLocale : config.locale?.locale;

  const formatter = useMemo(() => new Intl.NumberFormat(locale, formatOptions), [
    locale,
    formatOptions,
  ]);

  const parser = (val: string | undefined) => {
    if (!val) {
      return 0;
    }

    const localeFormatter = new Intl.NumberFormat(locale);

    // detecting and parsing between comma and dot
    const group = localeFormatter.format(1111).replace(/1/g, '');
    const decimal = localeFormatter.format(1.1).replace(/1/g, '');

    return val
      .replace(new RegExp(`\\${group}`, 'g'), '')
      .replace(new RegExp(`\\${decimal}`, 'g'), '.')
      .replace(/[^0-9.]/g, '');
  };

  if (readOnly) {
    return (
      <span ref={ref}>
        {formatter.format((value === undefined ? defaultValue : value) as number)}
      </span>
    );
  }

  return (
    <InputNumber
      min={0}
      {...props}
      ref={ref}
      defaultValue={defaultValue}
      formatter={formatter.format as InputNumberProps['formatter']}
      parser={parser}
      value={value}
    />
  );
};

export default forwardRef(Digit);
