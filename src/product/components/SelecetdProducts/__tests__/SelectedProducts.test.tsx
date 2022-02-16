import React from 'react';
import {render} from '@testing-library/react-native';
import SelectedProducts from '../SelectedProducts';
import SelectedProductsSeedData from './SelectedProductsSeedData.json';
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
});
