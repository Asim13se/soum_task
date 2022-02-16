import React from 'react';
import {ProductBrand} from '../../types/ProductBrand';
import {ExpandedProductItemsMap} from './types/ExpandedProductItemsMap';
import {SetExpandedProductItemsMap} from './types/SetExpandedProductItemsMap';

type Props = {
  brands: ProductBrand[];
  expandedProductItemsMap: ExpandedProductItemsMap;
  setExpandedProductItemsMap: SetExpandedProductItemsMap;
};

function ProductBrandItem(props: Props) {
  return null;
}

export default ProductBrandItem;
