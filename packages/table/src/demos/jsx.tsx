import React, { ReactElement } from 'react';
import Table, { Column, ColumnGroup } from '@league/table';

export default (): ReactElement => {
  const data = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      id: 2,
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      id: 3,
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  return (
    <Table dataSource={data} rowKey="id">
      <ColumnGroup title="Name">
        <Column key="firstName" dataIndex="firstName" title="First Name" />
        <Column key="lastName" dataIndex="lastName" title="Last Name" />
      </ColumnGroup>
      <Column key="age" dataIndex="age" title="Age" />
      <Column key="address" dataIndex="address" title="Address" />
      <Column key="tags" dataIndex="tags" title="Tags" />
    </Table>
  );
};
