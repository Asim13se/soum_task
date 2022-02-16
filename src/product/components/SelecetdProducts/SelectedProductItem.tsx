import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ExpandedProductItem} from '../ProductTreeView/types/ExpandedProductItemsMap';

type Props = {
  productItem: ExpandedProductItem;
};

function SelectedProductItem(props: Props) {
  const hierarchyList = [
    ...props.productItem!.parentList,
    props.productItem!.item,
  ];
  const hierarchLabel = hierarchyList.map(item => item?.label).join(' > ');
  return (
    <View style={styles.main}>
      <Text style={styles.text}>{hierarchLabel}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    alignSelf: 'flex-start',
    marginTop: 10,
    backgroundColor: '#30cdcc',
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 8,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
});

export default SelectedProductItem;
