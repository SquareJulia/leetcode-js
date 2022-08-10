import { TreeNode } from "./types";

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  const dummy = new TreeNode();
  dummy.left = root;
  const stack: TreeNode[] = [];
  stack.push(dummy);
  while (root && root.val !== key) {
    stack.push(root);
    if (root.val < key) {
      root = root.right;
    } else {
      root = root.left;
    }
  }
  if (root) {
    const parent: TreeNode = stack.pop();
    if (!root.right) {
      if (parent.left === root) {
        parent.left = root.left;
      } else {
        parent.right = root.left;
      }
    } else {
      while (stack.length > 0) {
        stack.pop();
      }
      let cur: TreeNode | null = root.right;
      do {
        stack.push(cur);
        cur = cur.left;
      } while (cur);
      cur = stack.pop(); //left most
      if (stack.length > 0) {
        let curParent = stack.pop();
        curParent.left = cur.right;
      }
      //cur should replace root
      cur.left = root.left;
      if (root.right !== cur) {
        cur.right = root.right;
      }
      if (parent.left === root) {
        parent.left = cur;
      } else {
        parent.right = cur;
      }
    }
  }
  return dummy.left;
}
