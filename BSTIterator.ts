import { TreeNode } from "./types";
class BSTIterator {
  private stack: (TreeNode | null)[] = [];
  constructor(root: TreeNode | null) {
    while (root) {
      this.stack.push(root);
      root = root.left;
    }
  }

  next(): number {
    const ret = this.stack.pop() as TreeNode;
    let tmp = ret.right;
    while (tmp) {
      this.stack.push(tmp);
      tmp = tmp.left;
    }
    return ret.val;
  }

  hasNext(): boolean {
    return this.stack.length > 0;
  }
}
