import {ProductCategory} from '../types/ProductCategory';
import {ProductBrand} from '../types/ProductBrand';

type Input = {
  id: string;
  label: string;
  subLabel?: string;
  brands: ProductBrand[];
};

export default function productCategoryFactory(input: Input): ProductCategory {
  return {
    id: input.id,
    type: 'category',
    label: input.label,
    subLabel: input.subLabel,
    brands: input.brands,
  };
}
