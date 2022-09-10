import { TreeNode } from "../types";
function levelOrder(root: TreeNode | null): number[][] {
  const ret: number[][] = [];
  const queue: (TreeNode | null)[] = [];
  queue.push(root);
  while (queue.length) {
    let level: number[] = [];
    for (let i = queue.length; i > 0; i--) {
      root = queue.shift() as TreeNode | null;
      if (root) {
        level.push(root.val);
        queue.push(root.left);
        queue.push(root.right);
      }
    }
    if (level.length) {
      ret.push(level);
    }
  }
  return ret;
}
