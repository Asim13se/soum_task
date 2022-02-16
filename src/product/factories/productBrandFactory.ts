import {ProductBrand} from '../types/ProductBrand';
import {ProductModel} from '../types/ProductModel';

type Input = {
  id: string;
  label: string;
  subLabel?: string;
  models: ProductModel[];
};

export default function productBrandFactory(input: Input): ProductBrand {
  return {
    id: input.id,
    type: 'brand',
    label: input.label,
    subLabel: input.subLabel,
    models: input.models,
  };
}
