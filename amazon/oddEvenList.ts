import { ListNode } from "../types";
function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  const evenHead = head.next;
  let odd = head,
    even: ListNode | null = evenHead;
  while (even && even.next) {
    odd = odd.next = even.next;
    even = even.next = odd.next;
  }
  odd.next = evenHead;
  return head;
}
