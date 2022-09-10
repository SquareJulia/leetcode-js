import { ListNode } from "../types";
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const merge2Lists = (a: ListNode | null, b: ListNode | null) => {
    if (!a || !b) {
      return a ? a : b;
    }
    const dummy = new ListNode();
    let cur = dummy;
    while (a && b) {
      if (a.val <= b.val) {
        cur = cur.next = a;
        a = a.next;
      } else {
        cur = cur.next = b;
        b = b.next;
      }
    }
    cur.next = a ? a : b;
    return dummy.next;
  };

  const merge: (l: number, r: number) => ListNode | null = (l, r) => {
    if (l > r) {
      return null;
    }
    if (l === r) {
      return lists[l];
    }
    const mid = (l + r) >> 1;
    return merge2Lists(merge(l, mid), merge(mid + 1, r));
  };
  return merge(0, lists.length - 1);
}
