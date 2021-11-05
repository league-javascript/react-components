import React, { ReactElement } from 'react';
import Table from '@league/table';

export default (): ReactElement => {
  const columns = [
    { dataIndex: 'name', title: 'Name' },
    { dataIndex: 'age', title: 'Age' },
    { dataIndex: 'address', title: 'Address' },
    { dataIndex: 'tags', title: 'Tags' },
  ];

  const data = [
    {
      id: 1,
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: 2,
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: 3,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  return <Table columns={columns} dataSource={data} rowKey="id" />;
};
