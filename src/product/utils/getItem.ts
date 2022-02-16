import {ProductHierarchyType} from '../types/ProductHierarchyType';
import {ProductHierarchy} from '../types/ProductHierarchy';
import productCategoryList from '../data/productCategoryList';
import productModelList from '../data/productModelList';
import productVariantList from '../data/productVariantList';
import productBrandList from '../data/productBrandList';

type Input = {
  itemId: string;
  itemType: ProductHierarchyType | 'none';
};

export default function getItem(
  input: Input,
): ProductHierarchy | null | undefined {
  const {itemId, itemType} = input;
  if (itemType === 'category') {
    return productCategoryList.find(item => item.id === itemId);
  } else if (itemType === 'brand') {
    return productBrandList.find(item => item.id === itemId);
  } else if (itemType === 'model') {
    return productModelList.find(item => item.id === itemId);
  } else if (itemType === 'variant') {
    return productVariantList.find(item => item.id === itemId);
  } else if (itemType === 'none') {
    return null;
  } else {
    throw new Error('unknown parentType');
  }
}
