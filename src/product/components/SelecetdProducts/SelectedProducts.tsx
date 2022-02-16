import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {
  ExpandedProductItem,
  ExpandedProductItemsMap,
} from '../ProductTreeView/types/ExpandedProductItemsMap';
import SelectedProductItem from './SelectedProductItem';

type Props = {
  expandedProductItemsMap: ExpandedProductItemsMap;
  style?: ViewStyle;
};

function SelectedProducts(props: Props) {
  const [selectedProductList, setSelectedProductList] = useState<
    ExpandedProductItem[]
  >([]);
  useEffect(() => {
    const expandedProductItemList = Object.values(
      props.expandedProductItemsMap,
    );
    const expandedProductItemListFiltered = expandedProductItemList.filter(
      productItem => {
        const isLeafItem = !expandedProductItemList.some(item =>
          item?.parentList.find(parent => parent?.id === productItem?.item.id),
        );
        return isLeafItem;
      },
    );
    setSelectedProductList(expandedProductItemListFiltered);
  }, [props.expandedProductItemsMap]);
  return (
    <View style={props.style}>
      <Text style={styles.header}>{'Selected Variants:'}</Text>
      <View testID={'selected_product_list_test_id'}>
        {selectedProductList.map(productItem => {
          if (!productItem) return null;
          return (
            <SelectedProductItem
              key={productItem.item.id}
              productItem={productItem}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SelectedProducts;
