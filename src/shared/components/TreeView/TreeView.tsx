import React from 'react';
import {View} from 'react-native';
import {TreeViewItemType} from '../../types/TreeViewItemType';

type Props<T> = {
  treeItemList: TreeViewItemType<T>[];
};

function TreeView<T>(props: Props<T>) {
  return <View></View>;
}

export default TreeView;
