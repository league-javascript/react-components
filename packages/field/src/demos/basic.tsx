import React, { ReactElement, useState } from 'react';
import Field from '@league/field';
import { Descriptions, Space, Switch } from 'antd';

export default (): ReactElement => {
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const [plain, setPlain] = useState(false);

  return (
    <>
      <Space size="large" style={{ marginBottom: 24 }}>
        <Switch
          checked={readOnly}
          checkedChildren="Read-only"
          unCheckedChildren="Editable"
          onChange={setReadOnly}
        />
        <Switch
          checked={plain}
          checkedChildren="Plain"
          unCheckedChildren="Normal"
          onChange={setPlain}
        />
      </Space>
      <Descriptions column={2} contentStyle={{ paddingRight: 24 }}>
        <Descriptions.Item label="Text">
          <Field defaultValue="This is a text." plain={plain} readOnly={readOnly} type="text" />
        </Descriptions.Item>
        <Descriptions.Item label="Password">
          <Field defaultValue="password" plain={plain} readOnly={readOnly} type="password" />
        </Descriptions.Item>
        <Descriptions.Item label="Money">
          <Field defaultValue={1000} plain={plain} readOnly={readOnly} type="money" />
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};
