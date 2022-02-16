import {ProductGeneric} from './ProductGeneric';
import {ProductModel} from './ProductModel';

export type ProductBrand = ProductGeneric & {
  type: 'brand';
  models: ProductModel[];
};
