import { ListNode } from "../types";

function swapPairs(head: ListNode | null): ListNode | null {
  const dummy = new ListNode(0, head);
  let cur = dummy;
  while (cur.next && cur.next.next) {
    const nxt = cur.next;
    cur.next = cur.next.next;
    nxt.next = cur.next.next;
    cur = cur.next.next = nxt;
  }
  return dummy.next;
}
