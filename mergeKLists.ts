import { ListNode } from "./types";

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length == 0) {
    return null;
  }
  const merge: (
    list1: ListNode | null,
    list2: ListNode | null
  ) => ListNode | null = (list1, list2) => {
    const dummy = new ListNode();
    let cur = dummy;
    while (list1 || list2) {
      if (!list1 || !list2) {
        cur.next = list1 ? list1 : list2;
        break;
      }
      if (list1.val <= list2.val) {
        cur = cur.next = list1;
        list1 = list1.next;
      } else {
        cur = cur.next = list2;
        list2 = list2.next;
      }
    }
    return dummy.next;
  };

  let step = 1;
  while (step < lists.length) {
    for (let i = 0; i + step < lists.length; i += 2 * step) {
      lists[i] = merge(lists[i], lists[i + step]);
    }
    step *= 2;
  }
  return lists[0];
}
