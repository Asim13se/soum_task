import {ProductModel} from '../types/ProductModel';
import {ProductVariant} from '../types/ProductVariant';

type Input = {
  id: string;
  label: string;
  subLabel?: string;
  variants: ProductVariant[];
};

export default function productModelFactory(input: Input): ProductModel {
  return {
    id: input.id,
    type: 'model',
    label: input.label,
    subLabel: input.subLabel,
    variants: input.variants,
  };
}
