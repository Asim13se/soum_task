export type TreeViewItemType<T> = {
  label: string;
  subLabel?: string;
  isSelected: boolean;
  indentionLevel: number;
  data: T;
};
