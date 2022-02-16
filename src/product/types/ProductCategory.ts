import {ProductGeneric} from './ProductGeneric';
import {ProductBrand} from './ProductBrand';

export type ProductCategory = ProductGeneric & {
  type: 'category';
  brands: ProductBrand[];
};
