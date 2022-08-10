import { TreeNode } from "./types";
function diameterOfBinaryTree(root: TreeNode | null): number {
  let ans = 0;
  const dfs: (root: TreeNode | null) => number = (root) => {
    if (!root) {
      return 0;
    }
    const left = dfs(root.left),
      right = dfs(root.right);
    ans = Math.max(ans, left + right);
    return 1 + Math.max(left, right);
  };
  dfs(root);
  return ans;
}
