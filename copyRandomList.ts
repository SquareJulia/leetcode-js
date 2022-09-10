import { Node } from "./types";
function copyRandomList(head: Node | null): Node | null {
  let cur: Node | null = head,
    next;
  while (cur) {
    cur.next = cur.next ? new Node(cur.val, cur.next) : new Node(cur.val);
    cur = cur.next.next;
  }
  //copy randoms
  cur = head;
  while (cur) {
    next = cur.next as Node;
    next.random = cur.random ? cur.random.next : null;
    cur = next.next;
  }
  //split 2 lists
  cur = head;
  const ret = cur ? cur.next : null;
  while (cur) {
    next = cur.next as Node;
    cur = cur.next = next.next;
    next.next = cur ? cur.next : null;
  }
  return ret;
}
