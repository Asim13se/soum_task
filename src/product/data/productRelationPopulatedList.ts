import {RelationPopulated} from '../../shared/types/RelationPopulated';
import {ProductHierarchy} from '../types/ProductHierarchy';
import getItem from '../utils/getItem';
import productRelationList from './productRelationList';

const productRelationPopulatedList: RelationPopulated<
  ProductHierarchy,
  ProductHierarchy
>[] = productRelationList.map(relation => {
  const parent = getItem({
    itemId: relation.parentId,
    itemType: relation.parentType,
  });
  const child = getItem({
    itemId: relation.childId,
    itemType: relation.childType,
  });
  return {
    ...relation,
    parent,
    child,
  };
});

export default productRelationPopulatedList;
