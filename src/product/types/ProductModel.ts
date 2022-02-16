import {ProductGeneric} from './ProductGeneric';
import {ProductVariant} from './ProductVariant';

export type ProductModel = ProductGeneric & {
  type: 'model';
  variants: ProductVariant[];
};
