/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from "./types";

function serialize(root: TreeNode | null): string {
  const ans: (TreeNode | null)[] = [];
  const dfs: (root: TreeNode | null) => void = (root) => {
    ans.push(root);
    if (root) {
      dfs(root.left);
      dfs(root.right);
    }
  };
  dfs(root);
  return ans.map((node) => (node ? node.val : "")).join(",");
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const elems: string[] = data.split(",");
  console.log(elems);
  let i = 0; //pointer to elems array
  const dfs: () => TreeNode | null = () => {
    if (i === elems.length) {
      return null;
    }
    const elem = elems[i++];
    let node = null;
    if (elem != "") {
      node = new TreeNode(Number(elem), dfs(), dfs());
    }
    return node;
  };
  return dfs();
}
