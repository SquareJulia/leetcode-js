import { ListNode } from "./types";
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummy: ListNode = new ListNode(0, null);
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
}
