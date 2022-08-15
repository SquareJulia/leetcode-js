function isBalanced(root: TreeNode | null): boolean {
  const height: (root: TreeNode | null) => number = (root) => {
    if (!root) {
      return 0;
    }
    const left = height(root.left),
      right = height(root.right);
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
      return -1;
    }
    return 1 + Math.max(left, right);
  };
  return height(root) >= 0;
}
