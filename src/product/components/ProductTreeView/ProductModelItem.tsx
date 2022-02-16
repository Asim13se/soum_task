import React from 'react';
import {ProductModel} from '../../types/ProductModel';
import {ExpandedProductItemsMap} from './types/ExpandedProductItemsMap';
import {SetExpandedProductItemsMap} from './types/SetExpandedProductItemsMap';

type Props = {
  models: ProductModel[];
  expandedProductItemsMap: ExpandedProductItemsMap;
  setExpandedProductItemsMap: SetExpandedProductItemsMap;
};

function ProductModelItem(props: Props) {
  return (
    <>
      {props.models.map(model => (
        <ProductModelItem
          models={model.models}
          expandedProductItemsMap={props.expandedProductItemsMap}
          setExpandedProductItemsMap={props.setExpandedProductItemsMap}
        />
      ))}
    </>
  );
}

export default ProductModelItem;
