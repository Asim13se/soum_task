import React, {ReactNode} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ExpandedProductItemsMap} from './types/ExpandedProductItemsMap';
import {ProductHierarchy} from '../../types/ProductHierarchy';
import getExpandedItemKey from './utils/getExpandedItemKey';
import {HandlePressProductHierarchy} from './types/HandlePressProductHierarchy';

type Props = {
  parentList: (ProductHierarchy | null)[];
  item: ProductHierarchy;
  expandedProductItemsMap: ExpandedProductItemsMap;
  marginStart: number;
  onPress: HandlePressProductHierarchy;
  renderSubItems?: () => ReactNode;
};

function ProductGenericItem(props: Props) {
  const hierarchyList = [...props.parentList, props.item];
  const key = getExpandedItemKey(hierarchyList);
  const isExpanded = Boolean(props.expandedProductItemsMap[key]);
  const handlePress = () => {
    props.onPress(props.item, props.parentList);
  };
  return (
    <View style={[styles.main, {marginStart: props.marginStart}]}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.text}>{`${isExpanded ? '✅' : ''} ${
          props.item.label
        }`}</Text>
      </TouchableOpacity>
      {isExpanded ? props.renderSubItems?.() : null}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProductGenericItem;
