import React from 'react';
import {ProductCategory} from '../../types/ProductCategory';
import {ExpandedProductItemsMap} from './types/ExpandedProductItemsMap';
import {SetExpandedProductItemsMap} from './types/SetExpandedProductItemsMap';
import ProductGenericItem from './ProductGenericItem';
import getExpandedItemKey from './utils/getExpandedItemKey';
import {HandlePressProductHierarchy} from './types/HandlePressProductHierarchy';

type Props = {
  categories: ProductCategory[];
  expandedProductItemsMap: ExpandedProductItemsMap;
  setExpandedProductItemsMap: SetExpandedProductItemsMap;
};

function ProductCategoryItem(props: Props) {
  const indentation = 15;
  const {expandedProductItemsMap} = props;
  const handlePressItem: HandlePressProductHierarchy = (item, parentList) => {
    const hierarchyList = [...parentList, item];
    const key = getExpandedItemKey(hierarchyList);
    const isExpanded = Boolean(props.expandedProductItemsMap[key]?.item);
    const newExpandedProductItemsMap = {...expandedProductItemsMap};
    if (isExpanded) {
      Object.values(expandedProductItemsMap).map(expandedProduct => {
        const isSubItem = expandedProduct?.parentList.find(
          parent => parent?.id === item.id,
        );
        if (isSubItem) {
          const subItem = expandedProduct!.item;
          const subHierarchyList = [...expandedProduct!.parentList, subItem];
          const subItemKey = getExpandedItemKey(subHierarchyList);
          newExpandedProductItemsMap[subItemKey] = null;
        }
      });
      newExpandedProductItemsMap[key] = null;
      props.setExpandedProductItemsMap(newExpandedProductItemsMap);
    } else {
      props.setExpandedProductItemsMap({
        ...expandedProductItemsMap,
        [key]: {
          item,
          parentList,
        },
      });
    }
  };
  return (
    <>
      {props.categories.map(category => (
        <ProductGenericItem
          key={category.id}
          parentList={[]}
          item={category}
          expandedProductItemsMap={expandedProductItemsMap}
          onPress={handlePressItem}
          marginStart={0}
          renderSubItems={() =>
            category.brands.map(brand => (
              <ProductGenericItem
                key={brand.id}
                parentList={[category]}
                item={brand}
                expandedProductItemsMap={expandedProductItemsMap}
                onPress={handlePressItem}
                marginStart={indentation}
                renderSubItems={() =>
                  brand.models.map(model => (
                    <ProductGenericItem
                      key={model.id}
                      parentList={[category, brand]}
                      item={model}
                      expandedProductItemsMap={expandedProductItemsMap}
                      onPress={handlePressItem}
                      marginStart={indentation * 2}
                      renderSubItems={() =>
                        model.variants.map(variant => (
                          <ProductGenericItem
                            key={variant.id}
                            parentList={[category, brand, model]}
                            item={variant}
                            expandedProductItemsMap={expandedProductItemsMap}
                            onPress={handlePressItem}
                            marginStart={indentation * 2.5}
                          />
                        ))
                      }
                    />
                  ))
                }
              />
            ))
          }
        />
      ))}
    </>
  );
}

export default ProductCategoryItem;
