import React, { ReactNode, forwardRef, useContext, useState } from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import { ConfigContext } from 'antd/lib/config-provider';
import classNames from 'classnames';
import './index.less';
import type { FieldFC, FieldProps } from '../../typings';

export interface BooleanProps extends FieldProps<boolean> {
  /** 选中时的内容 */
  checkedChildren?: ReactNode;
  /** 非选中时的内容 */
  unCheckedChildren?: ReactNode;
  /** css 类名  */
  className?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** css 类名前缀 */
  prefixCls?: string;
}

const Boolean: FieldFC<BooleanProps> = (
  {
    checkedChildren = <CheckOutlined />,
    unCheckedChildren = <CloseOutlined />,
    className,
    defaultValue,
    disabled,
    plain,
    prefixCls: customizePrefixCls,
    readOnly,
    value,
    onChange,
    ...props
  },
  ref,
) => {
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('switch', customizePrefixCls);

  const [checked, setChecked] = useState(defaultValue);
  const mergedChecked = value !== undefined ? value : checked;

  const toggleChange =
    readOnly || disabled
      ? undefined
      : () => {
          setChecked(!mergedChecked);
          onChange?.(!mergedChecked);
        };

  if (plain) {
    return (
      <button
        ref={ref}
        aria-checked={mergedChecked}
        className={classNames(prefixCls, `${prefixCls}-plain`, className, {
          [`${prefixCls}-checked`]: mergedChecked,
          [`${prefixCls}-disabled`]: disabled,
          [`${prefixCls}-readonly`]: readOnly,
        })}
        role="switch"
        type="button"
        onClick={toggleChange}
      >
        {mergedChecked ? checkedChildren : unCheckedChildren}
      </button>
    );
  }

  return (
    <Switch
      {...props}
      ref={ref}
      checked={mergedChecked}
      checkedChildren={checkedChildren}
      className={classNames(className, { [`${prefixCls}-readonly`]: readOnly })}
      disabled={disabled}
      prefixCls={prefixCls}
      unCheckedChildren={unCheckedChildren}
      onChange={toggleChange}
    />
  );
};

export default forwardRef(Boolean);
