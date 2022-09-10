import { TreeNode } from "../types";
function delNodes(
  root: TreeNode | null,
  to_delete: number[]
): Array<TreeNode | null> {
  const ans: Array<TreeNode | null> = [];
  const dfs = (root: TreeNode | null) => {
    //root shouldn't be deleted
    if (!root) {
      return;
    }
    if (root.left && to_delete.indexOf(root.left.val) !== -1) {
      dfs(root.left.left);
      dfs(root.left.right);
      root.left = null;
    }
    if (root.right && to_delete.indexOf(root.right.val) !== -1) {
      dfs(root.right.left);
      dfs(root.right.right);
      root.left = null;
    }
  };
  return ans;
}
