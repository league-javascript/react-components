/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, ForwardRefRenderFunction } from 'react';

export interface FieldProps<V = any> {
  /** 默认字段内容 */
  defaultValue?: V;
  /** 是否只读 */
  readOnly?: boolean;
  /** 是否精简模式 */
  plain?: boolean;
  /** 字段内容 */
  value?: V;
  /** 字段内容变化时的回调 */
  onChange?: (value: V | ChangeEvent<HTMLInputElement>) => void;
}

export type FieldFC<P extends FieldProps> = ForwardRefRenderFunction<any, P>;
