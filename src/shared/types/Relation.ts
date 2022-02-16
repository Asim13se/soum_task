import {ProductHierarchyType} from '../../product/types/ProductHierarchyType';

export type Relation = {
  parentId: string | null;
  parentType: ProductHierarchyType | 'none';
  childId: string | null;
  childType: ProductHierarchyType | 'none';
};
