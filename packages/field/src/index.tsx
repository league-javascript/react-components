import React, { ForwardRefRenderFunction, forwardRef } from 'react';
import Boolean, { BooleanProps } from './components/boolean';
import Digit, { DigitProps } from './components/digit';
import Money, { MoneyProps } from './components/money';
import Password, { PasswordProps } from './components/password';
import Text, { TextProps } from './components/text';
import type { FieldProps as Props } from './typings';

type F<T extends string, P extends Props> = { type: T } & Omit<P, 'type'>;

export type FieldProps =
  | F<'boolean', BooleanProps>
  | F<'digit', DigitProps>
  | F<'money', MoneyProps>
  | F<'password', PasswordProps>
  | F<'text', TextProps>;

const Field: ForwardRefRenderFunction<unknown, FieldProps> = ({ type, ...props }, ref) => {
  switch (type) {
    case 'boolean':
      return <Boolean {...(props as BooleanProps)} ref={ref} />;
    case 'digit':
      return <Digit {...(props as DigitProps)} ref={ref} />;
    case 'money':
      return <Money {...(props as MoneyProps)} ref={ref} />;
    case 'password':
      return <Password {...(props as PasswordProps)} ref={ref} />;
    case 'text':
      return <Text {...(props as TextProps)} ref={ref} />;
    default:
      return null;
  }
};

Field.displayName = 'Field';

export default forwardRef(Field);
