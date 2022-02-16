import {ProductGeneric} from './ProductGeneric';

export type ProductVariant = ProductGeneric & {
  type: 'variant';
};
