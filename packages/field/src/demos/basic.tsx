import React, { useState } from 'react';
import Field from '@league/field';
import { Descriptions, Radio, Space, Switch } from 'antd';

export default () => {
  const [mode, setMode] = useState<'read' | 'edit'>('read');
  const [plain, setPlain] = useState(false);

  return (
    <>
      <Space>
        <Radio.Group value={mode} onChange={e => setMode(e.target.value)}>
          <Radio value="read">Read-only</Radio>
          <Radio value="edit">Editable</Radio>
        </Radio.Group>
        <Switch
          checked={plain}
          checkedChildren="Plain"
          unCheckedChildren="Normal"
          onChange={setPlain}
        />
      </Space>
      <Descriptions colon column={2}>
        <Descriptions.Item label="Text">
          <Field mode={mode} plain={plain} type="text" value="This is a text." />
        </Descriptions.Item>
        <Descriptions.Item label="Password">
          <Field mode={mode} plain={plain} type="password" value="password" />
        </Descriptions.Item>
        <Descriptions.Item label="Money">
          <Field mode={mode} plain={plain} type="money" value={1000} />
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};
