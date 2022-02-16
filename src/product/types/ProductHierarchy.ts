import {ProductCategory} from './ProductCategory';
import {ProductBrand} from './ProductBrand';
import {ProductModel} from './ProductModel';
import {ProductVariant} from './ProductVariant';

export type ProductHierarchy =
  | ProductCategory
  | ProductBrand
  | ProductModel
  | ProductVariant;
