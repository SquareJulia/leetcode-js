import { ListNode } from "./types";
const reverse = (head: ListNode | null) => {
  let cur: ListNode | null = head,
    pre = null,
    next;
  while (cur) {
    next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
};
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let kk = k - 1, // go k-1 steps to find tail of length k
    tail = head;
  while (kk && tail) {
    kk--;
    tail = tail.next;
  }
  if (kk > 0|| !tail) {
    return head;
  }
  const nextK: ListNode | null = (tail as ListNode).next;
  (tail as ListNode).next = null;
  const newHead = reverse(head);
  (head as ListNode).next = reverseKGroup(nextK, k);
  return newHead;
}
