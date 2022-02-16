import {Relation} from '../../shared/types/Relation';
import relationFactory from '../../shared/factories/relationFactory';

const productRelationList: Relation[] = [
  relationFactory({
    parentId: null,
    parentType: 'none',
    childId: 'phone_category_id',
    childType: 'category',
  }),
  relationFactory({
    parentId: null,
    parentType: 'none',
    childId: 'computer_category_id',
    childType: 'category',
  }),
  relationFactory({
    parentId: null,
    parentType: 'none',
    childId: 'watch_category_id',
    childType: 'category',
  }),
  relationFactory({
    parentId: null,
    parentType: 'none',
    childId: 'tv_category_id',
    childType: 'category',
  }),
  relationFactory({
    parentId: 'phone_category_id',
    parentType: 'category',
    childId: 'apple_brand_id',
    childType: 'brand',
  }),
  relationFactory({
    parentId: 'phone_category_id',
    parentType: 'category',
    childId: 'samsung_brand_id',
    childType: 'brand',
  }),
  relationFactory({
    parentId: 'apple_brand_id',
    parentType: 'brand',
    childId: 'iphone_6_model_id',
    childType: 'model',
  }),
  relationFactory({
    parentId: 'apple_brand_id',
    parentType: 'brand',
    childId: 'iphone_7_model_id',
    childType: 'model',
  }),
  relationFactory({
    parentId: 'iphone_6_model_id',
    parentType: 'model',
    childId: '128_gb_variant_id',
    childType: 'variant',
  }),
  relationFactory({
    parentId: 'iphone_6_model_id',
    parentType: 'model',
    childId: '256_gb_variant_id',
    childType: 'variant',
  }),
  relationFactory({
    parentId: 'iphone_6_model_id',
    parentType: 'model',
    childId: '512_gb_variant_id',
    childType: 'variant',
  }),
  relationFactory({
    parentId: 'iphone_7_model_id',
    parentType: 'model',
    childId: '256_gb_variant_id',
    childType: 'variant',
  }),
  relationFactory({
    parentId: 'iphone_7_model_id',
    parentType: 'model',
    childId: '512_gb_variant_id',
    childType: 'variant',
  }),
];

export default productRelationList;
