import React, { ReactElement, cloneElement, forwardRef, useContext, useState } from 'react';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { Input, InputProps } from 'antd';
import { ConfigContext } from 'antd/lib/config-provider';
import classNames from 'classnames';
import type { FieldFC, FieldProps as Props } from '../../typings';

export interface PasswordProps extends Omit<InputProps, keyof Props | 'suffix'>, Props<string> {
  /** 默认是否可见 */
  defaultVisible?: boolean;
  /** 隐藏标记 */
  hiddenMark?: string;
  /** 自定义切换按钮 */
  iconRender?: (visible: boolean) => ReactElement;
  /** 是否显示切换按钮 */
  visibilityToggle?: boolean;
}

const Password: FieldFC<PasswordProps> = (
  {
    defaultValue,
    defaultVisible = false,
    disabled,
    className,
    hiddenMark = '＊＊＊＊＊＊',
    iconRender = visible => (visible ? <EyeOutlined /> : <EyeInvisibleOutlined />),
    plain: _,
    prefixCls: customizePrefixCls,
    readOnly,
    size,
    value,
    visibilityToggle = true,
    ...props
  },
  ref,
) => {
  const [visible, setVisible] = useState(defaultVisible);
  const { getPrefixCls } = useContext(ConfigContext);

  const prefixCls = getPrefixCls('input-password', customizePrefixCls);
  const suffix =
    visibilityToggle &&
    cloneElement(iconRender(visible), {
      key: 'passwordIcon',
      className: `${prefixCls}-icon`,
      onClick: disabled ? undefined : () => setVisible(!visible),
      onMouseDown: (e: MouseEvent) => e.preventDefault(),
      onMouseUp: (e: MouseEvent) => e.preventDefault(),
    });

  if (readOnly) {
    return (
      <span ref={ref}>
        {visible ? value || defaultValue || '-' : hiddenMark}
        {suffix}
      </span>
    );
  }

  return (
    <Input
      allowClear
      autoComplete="off"
      {...props}
      ref={ref}
      className={classNames(prefixCls, className, { [`${prefixCls}-${size}`]: !!size })}
      defaultValue={defaultValue}
      disabled={disabled}
      size={size}
      suffix={suffix}
      type={visible ? 'text' : 'password'}
      value={value}
    />
  );
};

export default forwardRef(Password);
