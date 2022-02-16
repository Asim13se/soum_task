import {ProductHierarchy} from '../../../types/ProductHierarchy';

export type ExpandedProductItem = {
  item: ProductHierarchy;
  parentList: (ProductHierarchy | null)[];
} | null;
export type ExpandedProductItemsMap = {
  [key in string]: ExpandedProductItem;
};
