import React, { ReactNode, useContext, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Drawer, Dropdown, Form, Menu, Spin } from 'antd';
import { ConfigConsumerProps, ConfigContext } from 'antd/lib/config-provider';
import classNames from 'classnames';
import defaultLocale from '../../locale/en_US';
import './index.less';
import type { FormLocale } from '../../typings';
import type { DrawerProps, FormProps, SpinProps } from 'antd';
import type { MenuInfo } from 'rc-menu/lib/interface';

export interface DrawerFormProps<V = unknown> extends Omit<FormProps<V>, 'title'> {
  /** 抽屉属性 */
  drawerProps?: Omit<
    DrawerProps,
    'className' | 'footer' | 'footerStyle' | 'prefixCls' | 'style' | 'title' | 'visible' | 'width'
  >;
  /** 自定义抽屉底部 */
  footerRender?: (buttons: ReactNode[]) => ReactNode;
  /** 抽屉底部样式 */
  footerStyle?: DrawerProps['footerStyle'];
  /** 表单是否加载中 */
  loading?: boolean | SpinProps;
  /** 抽屉标题 */
  title?: DrawerProps['title'];
  /** 表单数据 */
  values?: V;
  /** 抽屉是否可见 */
  visible?: DrawerProps['visible'];
  /** 抽屉宽度 */
  width?: DrawerProps['width'];
  /** 提交表单且数据验证成功后回调事件 */
  onFinish?: (values: V) => Promise<boolean | void>;
  /** visible 改变时触发 */
  onVisibleChange?: (visible: boolean) => void;
}

const DrawerForm: <V = unknown>(props: DrawerFormProps<V>) => React.ReactElement = ({
  className: customizeClassName,
  children,
  drawerProps,
  footerStyle,
  footerRender = buttons => buttons,
  form: formInstance,
  loading = false,
  prefixCls: customizePrefixCls,
  size,
  title,
  // values,
  visible: customizeVisible,
  width = 480,
  onFinish,
  onVisibleChange,
  ...formProps
}) => {
  const { getPrefixCls, locale } = useContext<
    { locale?: { Form?: Partial<FormLocale> } } & ConfigConsumerProps
  >(ConfigContext);

  const [form] = Form.useForm(formInstance);
  const [submitting, setSubmitting] = useState(false);

  const [visible, setVisible] = useState<boolean>();
  const mergedVisible = customizeVisible !== undefined ? customizeVisible : visible;

  const prefixCls = getPrefixCls('drawer-form', customizePrefixCls);
  const className = classNames(prefixCls, customizeClassName);

  const triggerVisibleChange = (value: boolean) => {
    setVisible(value);
    onVisibleChange?.(value);
  };

  const onSubmit = async (e: MenuInfo | React.MouseEvent<HTMLElement>) => {
    setSubmitting(true);

    const fieldsValue = await form.validateFields();

    if ((await onFinish?.(fieldsValue)) !== false) {
      form.resetFields();
    }

    setSubmitting(false);

    if ((e as MenuInfo).key !== 'submit') {
      triggerVisibleChange(false);
    }
  };

  const onClose: DrawerProps['onClose'] = e => {
    triggerVisibleChange(false);
    drawerProps?.onClose?.(e);
  };

  return (
    <Drawer
      closable={false}
      maskStyle={{ opacity: 0, animation: 'none' }}
      {...drawerProps}
      className={className}
      footer={footerRender([
        <Button
          key="cancel"
          size={size}
          type="default"
          onClick={onClose as React.MouseEventHandler}
        >
          {locale?.Form?.cancel || defaultLocale.cancel}
        </Button>,
        <Dropdown.Button
          key="submit"
          icon={<DownOutlined />}
          // @ts-expect-error: TODO Version
          loading={submitting}
          overlay={
            <Menu onClick={onSubmit}>
              <Menu.Item key="submit">
                {locale?.Form?.submitAndContinue || defaultLocale.submitAndContinue}
              </Menu.Item>
            </Menu>
          }
          size={size}
          trigger={['click']}
          type="primary"
          onClick={onSubmit}
        >
          {locale?.Form?.submit || defaultLocale.submit}
        </Dropdown.Button>,
      ])}
      footerStyle={footerStyle}
      title={title}
      visible={mergedVisible}
      width={width}
      onClose={onClose}
    >
      <Spin {...(typeof loading === 'boolean' ? { spinning: loading } : loading)}>
        <Form {...formProps} form={form} size={size}>
          {children}
        </Form>
      </Spin>
    </Drawer>
  );
};

export default DrawerForm;
