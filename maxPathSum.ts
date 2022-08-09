import TreeNode from "./TreeNode";
function maxPathSum(root: TreeNode | null): number {
  let res = root.val;
  const maxNotCrossWithRoot: (root: TreeNode | null) => number = (root) => {
    if (!root) {
      return 0;
    }
    const left = maxNotCrossWithRoot(root.left);
    const right = maxNotCrossWithRoot(root.right);
    let cross = root.val;
    if (left > 0) {
      cross += left;
    }
    if (right > 0) {
      cross += right;
    }
    res = Math.max(res, cross);
    return root.val + Math.max(0, Math.max(left, right));
  };
  maxNotCrossWithRoot(root);
  return res;
}
