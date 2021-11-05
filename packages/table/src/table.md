---
title: Table 表格
nav:
  title: 组件
  path: /components
group:
  title: 数据展示
  order: 2
---

# Table 表格

展示行列数据

## 何时使用

- 当有大量结构化的数据需要展现时
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时

## 代码演示

### 基本用法

<code src="./demos/basic.tsx" title="基本用法" description="简单的表格，最后一列是各种操作" />

### JSX 风格

这个只是一个描述 `columns` 的语法糖，所以你不能用其他组件去包裹 `Column` 和 `ColumnGroup`

<code src="./demos/jsx.tsx" title="JSX 风格" description="使用 JSX 风格的 API 让代码更具可读性" />

## API

`@league/table` 是在 [Ant Design Table](https://ant.design/components/table-cn) 上进行了一层封装，支持了一些预设，并且封装了一些行为。这里只列出与 [Ant Design Table](https://ant.design/components/table-cn/#API) 不同的 api。

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| ---- | ---- | ---- | ------ | ---- |
|      |      |      |        |
