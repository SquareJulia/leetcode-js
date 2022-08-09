import TreeNode from "./TreeNode";
function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  const inorder = (root: TreeNode | null) => {
    if (!root) {
      return;
    }
    inorder(root.left);
    res.push(root.val);
    inorder(root.right);
  };
  inorder(root);
  return res;
}
