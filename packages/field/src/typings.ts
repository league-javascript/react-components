export type FieldMode = 'read' | 'edit';

export interface FieldProps<V = unknown> {
  /** 组件模式 */
  mode?: FieldMode;
  /** 是否精简模式 */
  plain?: boolean;
  /** 字段内容 */
  value?: V;
}
