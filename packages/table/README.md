<h1 align="center">@league/table</h1>

<p align="center">基于 Ant Design 的高级表格组件</p>
<p align="center">
<img src="https://img.shields.io/badge/tests-developing-green?logo=github" alt="Build Status">
<img src="https://img.shields.io/badge/license-MIT-green" alt="License" />
</p>

## 🖥 兼容环境

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| --- | --- | --- | --- | --- | --- |
| Last 2 versions ✔ | Last 2 versions ✔ | Last 2 versions ✔ | Last 2 versions ✔ | Last 2 versions ✔ | IE11, Edge ✔ |

## ✨ 特性

- [ ] 支持 JSX 列语法
- [ ] 内置列表工具条
  - [ ] 全屏
  - [ ] 密度
  - [ ] 高级筛选
  - [ ] 刷新
  - [ ] 列配置
- [ ] 内置 10 余种数据列类型
- [ ] 内置行为
  - [ ] 行编辑
  - [ ] 列编辑
  - [ ] 行拖动
- [ ] 动效，参考 [解释刚刚发生了什么](https://motion.ant.design/language/transition-cn#%E8%A7%A3%E9%87%8A%E5%88%9A%E5%88%9A%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88)
  - [ ] 新增动效
  - [ ] 更新动效
  - [ ] 删除动效

## 📦 安装

```bash
npm install @league/table --save
```

```bash
yarn add @league/table
```

## 🔨 示例

```tsx
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
```

## ⌨️ API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| ---- | ---- | ---- | ------ | ---- |
|      |      |      |        |
