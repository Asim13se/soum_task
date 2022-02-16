import {ProductHierarchyType} from '../types/ProductHierarchyType';

export default function getIndentionLevelByProductType(
  itemType: ProductHierarchyType,
): number {
  if (itemType === 'category') {
    return 0;
  } else if (itemType === 'brand') {
    return 1;
  } else if (itemType === 'model') {
    return 2;
  } else if (itemType === 'variant') {
    return 3;
  } else if (itemType === 'none') {
    return 0;
  } else {
    throw new Error('unknown itemType');
  }
}
