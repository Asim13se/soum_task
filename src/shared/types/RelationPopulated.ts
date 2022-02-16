import {Relation} from './Relation';

export type RelationPopulated<P, C> = Relation & {
  parent: P | null | undefined;
  child: C | null | undefined;
};
