import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { DrawerForm, FormItem } from '@league/form';
import {
  AutoComplete,
  Button,
  Card,
  Cascader,
  Checkbox,
  DatePicker,
  Input,
  InputNumber,
  Mentions,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TimePicker,
  TreeSelect,
} from 'antd';
import type { LabeledValue } from 'antd/lib/select';

export default (): React.ReactElement => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState<LabeledValue[]>([]);

  const cities = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  const onSearch = (value: string) => {
    const values: LabeledValue[] =
      !value || value.indexOf('@') >= 0
        ? []
        : ['gmail.com', '163.com', 'qq.com'].map(domain => ({
            value: `${value}@${domain}`,
            label: `${value}@${domain}`,
          }));

    setEmail(values);
  };

  return (
    <Card bordered={false}>
      <Button icon={<PlusOutlined />} type="primary" onClick={() => setVisible(true)}>
        New
      </Button>
      <DrawerForm size="small" visible={visible} onVisibleChange={setVisible}>
        <FormItem
          bordered
          label="Name"
          name="name"
          rules={[{ required: true }]}
          tooltip="This is a required field"
        >
          <Input autoComplete="off" />
        </FormItem>
        <FormItem bordered initialValue={0} label="Sex" name="sex">
          <Radio.Group
            options={[
              { label: 'Unknown', value: 0 },
              { label: 'Man', value: 1 },
              { label: 'Woman', value: 2 },
            ]}
          />
        </FormItem>
        <FormItem
          bordered
          initialValue={[0, 1]}
          label="Hobbies"
          name="hobbies"
          rules={[{ required: true }]}
        >
          <Checkbox.Group
            options={[
              { label: 'Books', value: 0 },
              { label: 'Music', value: 1 },
              { label: 'Drawing', value: 2 },
            ]}
          />
        </FormItem>
        <FormItem bordered label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
          <AutoComplete options={email} placeholder="Input here" onSearch={onSearch} />
        </FormItem>
        <FormItem bordered label="Country" name="country">
          <Select>
            <Select.Option key="China" value="China">
              China
            </Select.Option>
            <Select.Option key="Russia" value="Russia">
              Russia
            </Select.Option>
          </Select>
        </FormItem>
        <FormItem bordered label="City" name="city">
          <Cascader options={cities} placeholder="Please select" />
        </FormItem>
        <FormItem bordered label="Birthday" name="birthday">
          <DatePicker />
        </FormItem>
        <FormItem bordered label="Time" name="time">
          <TimePicker />
        </FormItem>
        <FormItem bordered label="Balance" name="balance">
          <InputNumber
            defaultValue={0}
            formatter={value => `¥ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          />
        </FormItem>
        <FormItem bordered label="Family" name="family">
          <TreeSelect allowClear showSearch treeDefaultExpandAll>
            <TreeSelect.TreeNode title="Grandfather" value="grandfather">
              <TreeSelect.TreeNode title="Father" value="father">
                <TreeSelect.TreeNode title="Sister" value="sister" />
                <TreeSelect.TreeNode title="Brother" value="brother" />
              </TreeSelect.TreeNode>
              <TreeSelect.TreeNode title="Uncle" value="uncle">
                <TreeSelect.TreeNode title="Elder cousin" value="elder cousin" />
              </TreeSelect.TreeNode>
            </TreeSelect.TreeNode>
          </TreeSelect>
        </FormItem>
        <FormItem bordered label="Friends" name="friends">
          <Mentions autoSize placeholder="Input here">
            <Mentions.Option value="afc163">afc163</Mentions.Option>
            <Mentions.Option value="zombieJ">zombieJ</Mentions.Option>
            <Mentions.Option value="yesmeck">yesmeck</Mentions.Option>
          </Mentions>
        </FormItem>
        <FormItem bordered label="Rate" name="rate">
          <Rate />
        </FormItem>
        <FormItem bordered initialValue={37} label="Temperature" name="temperature">
          <Slider
            marks={{
              0: '0°C',
              26: '26°C',
              37: '37°C',
              100: {
                style: {
                  color: '#f50',
                },
                label: <strong>100°C</strong>,
              },
            }}
          />
        </FormItem>
        <FormItem bordered label="Status" name="status">
          <Switch />
        </FormItem>
      </DrawerForm>
    </Card>
  );
};
