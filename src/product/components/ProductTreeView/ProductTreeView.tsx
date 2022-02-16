import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import productTreeData from '../../data/productTreeData';
import ProductCategoryItem from './ProductCategoryItem';
import {ExpandedProductItemsMap} from './types/ExpandedProductItemsMap';
import SelectedProducts from '../SelecetdProducts/SelectedProducts';

function ProductTreeView() {
  const [expandedProductItemsMap, setExpandedProductItemsMap] =
    useState<ExpandedProductItemsMap>({});
  const [treeData, setTreeData] = useState(productTreeData);
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <ProductCategoryItem
        categories={treeData.categories}
        expandedProductItemsMap={expandedProductItemsMap}
        setExpandedProductItemsMap={setExpandedProductItemsMap}
      />
      <SelectedProducts
        style={styles.selectedProducts}
        expandedProductItemsMap={expandedProductItemsMap}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingTop: 30,
    paddingStart: 40,
  },
  selectedProducts: {
    marginTop: 20,
  },
});

export default ProductTreeView;
