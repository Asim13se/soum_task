import React from 'react';
import {render} from '@testing-library/react-native';
import SelectedProducts from '../SelectedProducts';
import SelectedProductsSeedData from './SelectedProductsSeedData.json';
import OneSelectedProductSeedData from './OneSelectedProductSeedData.json';
import ChildSelectedProductSeedData from './ChildSelectedProductSeedData.json';
import {ExpandedProductItemsMap} from '../../ProductTreeView/types/ExpandedProductItemsMap';

describe('<SelectedProducts />', () => {
  it('initial state', () => {
    const expandedProductItemsMap = {};
    const {getByTestId} = render(
      <SelectedProducts expandedProductItemsMap={expandedProductItemsMap} />,
    );
    const selectedProductList = getByTestId('selected_product_list_test_id');
    expect(selectedProductList.children.length).toBe(0);
  });
  it('when there are some selected products', () => {
    const expandedProductItemsMap =
      SelectedProductsSeedData as ExpandedProductItemsMap;
    const {getByTestId} = render(
      <SelectedProducts expandedProductItemsMap={expandedProductItemsMap} />,
    );
    const selectedProductList = getByTestId('selected_product_list_test_id');
    expect(selectedProductList.children.length).toBe(2);
  });
  it('should be updated when there is a new selected product', () => {
    const expandedProductItemsMap =
      SelectedProductsSeedData as ExpandedProductItemsMap;
    const {getByTestId, update, queryByTestId} = render(
      <SelectedProducts expandedProductItemsMap={expandedProductItemsMap} />,
    );
    const selectedProductList = getByTestId('selected_product_list_test_id');
    expect(selectedProductList.children.length).toBe(2);
    const newExpandedProductItemsMap: ExpandedProductItemsMap = {
      ...expandedProductItemsMap,
      ...(OneSelectedProductSeedData as ExpandedProductItemsMap),
    };
    update(
      <SelectedProducts expandedProductItemsMap={newExpandedProductItemsMap} />,
    );
    const newlySelectedProduct = queryByTestId(
      OneSelectedProductSeedData.phone_category_id.item.id,
    );
    expect(newlySelectedProduct).not.toBeNull();
    expect(selectedProductList.children.length).toBe(3);
  });
  it('the product that get selected and unselected should not appear on the list', () => {
    const expandedProductItemsMap =
      SelectedProductsSeedData as ExpandedProductItemsMap;
    const {update, queryByTestId} = render(
      <SelectedProducts expandedProductItemsMap={expandedProductItemsMap} />,
    );
    const newExpandedProductItemsMap: ExpandedProductItemsMap = {
      ...expandedProductItemsMap,
      ...(OneSelectedProductSeedData as ExpandedProductItemsMap),
    };
    update(
      <SelectedProducts expandedProductItemsMap={newExpandedProductItemsMap} />,
    );
    update(
      <SelectedProducts expandedProductItemsMap={expandedProductItemsMap} />,
    );
    const newlySelectedProduct = queryByTestId(
      OneSelectedProductSeedData.phone_category_id.item.id,
    );
    expect(newlySelectedProduct).toBeNull();
  });
  it('when a child item is selected the parent item should not appear on the list', () => {
    const expandedProductItemsMap =
      ChildSelectedProductSeedData as ExpandedProductItemsMap;
    const {queryByTestId} = render(
      <SelectedProducts expandedProductItemsMap={expandedProductItemsMap} />,
    );
    const parentItem = queryByTestId(
      ChildSelectedProductSeedData.phone_category_id.item.id,
    );
    const childItem = queryByTestId(
      ChildSelectedProductSeedData['phone_category_id.apple_brand_id'].item.id,
    );
    expect(parentItem).toBeNull();
    expect(childItem).not.toBeNull();
  });
});
