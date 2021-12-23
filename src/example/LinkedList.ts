type TVal = number | string | { [key: string]: any };
type TNode = INode | null | undefined;
interface INode {
  val: TVal;
  next: TNode;
}
export class Node {
  val: TVal;
  next: TNode;
  constructor(val: TVal, next?: TNode) {
    this.val = val;
    this.next = next || null;
  }
}
function defaultEquals(val1: TVal, val2: TVal): boolean {
  return val1 === val2;
}

export class LinkedList {
  count: number;
  head: TNode;
  equalsFn: (val1: TVal, val2: TVal) => boolean;
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = null;
    this.equalsFn = equalsFn;
  }

  push(val: TVal) {
    const currentNode = new Node(val);
    let current: TNode;
    if (!this.head) {
      this.head = new Node("", currentNode);
    } else {
      current = this.head;
      while (current.next) {
        current = current?.next;
      }
      current.next = currentNode;
    }
    this.count++;
  }

  removeByIndex(index: number) {
    if (index > this.count || !this.head) return;
    let count = -1;
    let preNode: TNode = this.head;
    let current: TNode = this.head;
    while (current) {
      if (count > index - 1) {
        preNode.next = current.next;
        this.count--;
        break;
      }
      preNode = current;
      current = current.next;
      count++;
    }
  }

  removeByVal(val: TVal) {
    if (!this.head) return;
    let preNode: TNode = this.head;
    let current: TNode = this.head;
    while (current) {
      if (this.equalsFn(current.val, val)) {
        preNode.next = current.next;
        this.count--;
      }
      preNode = current;
      current = current.next;
    }
  }

  removeAll() {
    this.head = new Node(-1);
    this.count = 0;
  }

  insertByIndex(index: number, val: TVal) {
    if (index > this.count || !this.head) return;
    let preNode: TNode = this.head;
    let current: TNode = this.head;
    let count = -1;
    while (current) {
      if (count > index - 1) {
        preNode.next = new Node(val, current.next);
        this.count++;
        break;
      }
    }
    preNode = current;
    current = current.next;
    count++;
  }
}
