/**
 * @description: antd 单选树
 * @author: zhangshuo
 * @date: 2023-03-20
 */
import React, { useEffect, useState } from "react";
import { Tree } from "antd";
import { DataNode } from "antd/es/tree";

const treeData: DataNode[] = [
  {
    title: "1",
    key: "1",
    children: [
      {
        title: "1-1",
        key: "1-1",
        children: [
          {
            title: "1-1-1",
            key: "1-1-1"
          },
          {
            title: "1-1-2",
            key: "1-1-2"
          },
          {
            title: "1-1-3",
            key: "1-1-3"
          }
        ]
      },
      {
        title: "1-2",
        key: "1-2",
        children: [
          {
            title: <span style={{ color: "#1890ff" }}>1-2-1</span>,
            key: "1-2-1"
          }
        ]
      }
    ]
  },
  {
    title: "2",
    key: "2",
  }
];

const SingleTree: React.FC = () => {

  const [checkedKeys, setCheckedKeys] = useState<string[]>(["1-1-1"])

  useEffect(() => {
    console.log('checkedKeys', checkedKeys)
  }, [checkedKeys])

  const onCheck = (checkedKeys: any, info: any) => {

    // 找到最后一个左子树的叶子节点
    if (!info.node.hasOwnProperty('children')) {
      setCheckedKeys([info.node.key])
    } else {
      // 递归找到最后一个叶子节点
      const findLastLeaf = (node: any) => {
        if (node.children) {
          findLastLeaf(node.children[0])
        } else {
          setCheckedKeys([node.key])
        }
      }
      findLastLeaf(info.node.children[0])
    }
  }

  return (
    <Tree
      checkable
      defaultExpandAll
      treeData={treeData}
      onCheck={onCheck}
      checkedKeys={checkedKeys}
    />
  )
}

export default SingleTree;
