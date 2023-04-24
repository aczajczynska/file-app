export type RenderType =
  | string
  | number
  | boolean
  | null
  | JSX.Element
  | Array<RenderType>;

export interface WithChildrenProps {
  children: RenderType;
}
export interface WithExcludedChildrenProps {
  children?: never;
}
