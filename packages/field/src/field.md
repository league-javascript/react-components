---
title: Field 字段
nav:
  title: 组件
  path: /components
group:
  title: 通用
  order: 0
---

# Field 字段

原子信息组件

## 何时使用

- 需要字段

## 代码演示

<code src="./demos/basic.tsx" />

## API

| 参数     | 说明                 | 类型                   | 默认值 | 版本 |
| -------- | -------------------- | ---------------------- | ------ | ---- |
| mode     | 组件模式             | `read` &#124; `edit`   | -      |
| plain    | 是否精简模式         | `boolean`              | -      |
| type     | 字段类容的值类型     | `string`               | -      |
| value    | 字段内容             | `any`                  | -      |
| onChange | 字段内容变化时的回调 | `(value: any) => void` | -      |
