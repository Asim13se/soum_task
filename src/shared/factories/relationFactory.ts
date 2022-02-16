import {Relation} from '../types/Relation';

type Input = Relation & {};

export default function relationFactory(input: Input): Relation {
  return {
    parentId: input.parentId,
    parentType: input.parentType,
    childId: input.childId,
    childType: input.childType,
  };
}
