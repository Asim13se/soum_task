import {TreeViewItemType} from '../../../../shared/types/TreeViewItemType';
import {Relation} from '../../../../shared/types/Relation';
import getIndentionLevelByProductType from '../../../utils/getIndentionLevelByProductType';
import {RelationPopulated} from '../../../../shared/types/RelationPopulated';
import {ProductHierarchy} from '../../../types/ProductHierarchy';

export default function buildProductTreeList(
  productRelationPopulated: RelationPopulated<
    ProductHierarchy,
    ProductHierarchy
  >[],
): TreeViewItemType<Relation>[] {
  return productRelationPopulated.map(relation => {
    const item = relation.child!;
    return {
      label: item.label,
      subLabel: item.subLabel,
      indentionLevel: getIndentionLevelByProductType(item.type),
      isSelected: false,
      data: relation,
    };
  });
}
