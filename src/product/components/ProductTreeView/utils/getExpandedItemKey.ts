import {ProductHierarchy} from '../../../types/ProductHierarchy';

export default function getExpandedItemKey(
  hierarchyList: (ProductHierarchy | null)[],
): string {
  return hierarchyList.map(item => item?.id).join('.');
}
