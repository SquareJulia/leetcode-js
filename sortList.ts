import { ListNode } from "./types";

function sortList(head: ListNode | null): ListNode | null {
  const merge = (list1: ListNode | null, list2: ListNode | null) => {
    const dummy = new ListNode();
    let cur: ListNode = dummy,
      tail: ListNode | null = null;
    while (list1 || list2) {
      if (!list1 || !list2) {
        cur.next = list1 ? list1 : list2;
        tail = cur.next;
        while (tail && tail.next) {
          tail = tail.next;
        }
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
    return [dummy.next, tail];
  };
  const lenList = (head: ListNode | null) => {
    let ans = 0;
    while (head) {
      ans++;
      head = head.next;
    }
    return ans;
  };
  const LEN = lenList(head);
  const sort: (head: ListNode | null, subLength: number) => ListNode | null = (
    head,
    subLength
  ) => {
    if (subLength >= LEN || !head) {
      return head;
    }
    const dummy = new ListNode();
    let prev = dummy,
      tail1: ListNode = head,
      head2: ListNode,
      tail2: ListNode,
      next: ListNode | null;
    while (true) {
      for (let i = 1; i < subLength && tail1.next; i++) {
        tail1 = tail1.next;
      }
      if (!tail1.next) {
        break;
      }
      head2 = tail2 = tail1.next;
      tail1.next = null;
      for (let i = 1; i < subLength && tail2.next; i++) {
        tail2 = tail2.next;
      }
      next = tail2.next;
      tail2.next = null;
      [prev.next, tail2] = merge(head, head2) as [ListNode, ListNode];
      tail2.next = next;
      head = next;
      prev = tail2;
    }
    return sort(dummy.next, subLength * 2);
  };
  return sort(head, 1);
}
