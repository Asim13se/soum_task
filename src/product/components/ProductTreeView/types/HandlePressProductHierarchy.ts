import {ProductHierarchy} from '../../../types/ProductHierarchy';

export type HandlePressProductHierarchy = (
  item: ProductHierarchy,
  parentList: (ProductHierarchy | null)[],
) => void;
