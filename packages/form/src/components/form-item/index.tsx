/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["props"] }] */
import React, { useContext, useState } from 'react';
import { Form, FormItemProps as Props } from 'antd';
import { ConfigContext } from 'antd/lib/config-provider';
import classNames from 'classnames';
import './index.less';

export interface FormItemProps<V = unknown> extends Props<V> {
  /** 是否有边框 */
  bordered?: boolean;
}

function isInput(el: HTMLElement): boolean {
  switch (el.tagName) {
    case 'INPUT':
      return (
        [
          'button',
          'radio',
          'checkbox',
          'range',
          'submit',
          'reset',
          'image',
          'file',
          'hidden',
        ].indexOf((el as HTMLInputElement).type) === -1
      );
    case 'TEXTAREA':
      return true;
    default:
      return el.className.indexOf('cascader-picker') !== -1;
  }
}

const FormItem: <V = unknown>(props: FormItemProps<V>) => React.ReactElement = ({
  bordered,
  className: customizeClassName,
  prefixCls: customizePrefixCls,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const { getPrefixCls } = useContext(ConfigContext);

  const prefixCls = getPrefixCls('form', customizePrefixCls);
  const className = classNames(customizeClassName, {
    [`${prefixCls}-item-bordered`]: bordered,
    [`${prefixCls}-item-focused`]: focused,
  });

  if (bordered) {
    // @ts-expect-error: Listen for bubbling events.
    props.onFocus = (e: React.FocusEvent<HTMLElement>) => isInput(e.target) && setFocused(true);
    // @ts-expect-error: Listen for bubbling events.
    props.onBlur = () => setFocused(false);
  }

  return <Form.Item {...props} className={className} prefixCls={customizePrefixCls} />;
};

export default FormItem;
