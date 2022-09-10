import { TreeNode } from "../types";
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root) {
    return null;
  }
  if (root === p || root === q) {
    return root;
  }
  const left = lowestCommonAncestor(root.left, p, q),
    right = lowestCommonAncestor(root.right, p, q);
  if (!left || !right) {
    return left ? left : right;
  }
  return root;
}
