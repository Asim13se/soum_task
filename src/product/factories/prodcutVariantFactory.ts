import {ProductVariant} from '../types/ProductVariant';

type Input = {
  id: string;
  label: string;
  subLabel?: string;
};

export default function productVariantFactory(input: Input): ProductVariant {
  return {
    id: input.id,
    type: 'variant',
    label: input.label,
    subLabel: input.subLabel,
  };
}
