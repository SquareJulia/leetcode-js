import { TreeNode } from "./types";
function zigzagLevelOrder(root: TreeNode | null): number[][] {
    const queue: (TreeNode | null)[] = [root];
    let leftToRight: boolean = true;
    const res: number[][] = [];
    while (queue.length > 0) {
      const oneLevel: number[] = [];
      for (let i = queue.length; i > 0; i--) {
        const tmp = leftToRight ? queue.shift() : queue.pop();
        if (!tmp) {
          continue;
        }
        oneLevel.push(tmp.val);
        if (leftToRight) {
          queue.push(tmp.left);
          queue.push(tmp.right);
        } else {
          queue.unshift(tmp.right);
          queue.unshift(tmp.left);
        }
      }
      leftToRight = !leftToRight;
      if (oneLevel.length > 0) {
        res.push(oneLevel);
      }
    }
    return res;
  }
  