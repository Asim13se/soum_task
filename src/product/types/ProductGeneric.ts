import {ProductHierarchyType} from './ProductHierarchyType';

export type ProductGeneric = {
  id: string;
  type: ProductHierarchyType;
  label: string;
  subLabel?: string;
};
