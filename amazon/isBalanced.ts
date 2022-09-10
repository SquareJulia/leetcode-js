import { TreeNode } from "../types";
function isBalanced(root: TreeNode | null): boolean {
  const depth: (root: TreeNode | null) => number = (root) => {
    if (!root) {
      return 0;
    }
    const left = depth(root.left);
    const right = depth(root.right);
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
      return -1;
    }
    return 1 + Math.max(left, right);
  };
  return depth(root) === -1 ? false : true;
}
