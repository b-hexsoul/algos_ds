// Node

class Node {
  constructor(value) {
    this.value = value;
    this.next = this.prev = null;
  }
}

// DLL
// push, pop, unshift, shift, get, set, insert, remove

class DoubleLinkedList {
  constructor() {
    this.length = 0;
    this.head = this.tail = null;
  }

  push(element) {
    this.length++;
    if (!this.tail) return (this.head = this.tail = new Node(element));

    const oldTail = this.tail;
    this.tail = new Node(element);
    oldTail.next = this.tail;
    this.tail.prev = oldTail;
    return this;
  }

  pop() {
    this.length--;
    if (this.length === 0) {
      const removed = this.tail;
      this.head = this.tail = null;
      return removed;
    }

    const removed = this.tail;
    const prev = removed.prev;
    prev.next = null;
    this.tail = prev;
    return removed;
  }

  unshift(element) {
    this.length++;
    if (!this.head) return (this.head = this.tail = new Node(element));

    const oldHead = this.head;
    this.head = new Node(element);
    this.head.next = oldHead;
    oldHead.prev = this.head;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    this.head = oldHead.next;
    this.head.prev = null;
    oldHead.next = null;
    this.length--;
    return oldHead;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    let current = this.head;
    let count = 0;
    while (current) {
      if (count === idx) return current;
      count++;
      current = current.next;
    }
  }

  set(idx, value) {
    const node = this.get(idx);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(idx, value) {
    if (idx < 0 || idx > this.length) return undefined;
    if (idx === 0) return this.unshift(value);
    if (idx === this.length) return this.push(value);

    let beforeNode = this.get(idx - 1);
    let afterNode = beforeNode.next;
    let newNode = new Node(value);
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
  }

  remove(idx) {
    if (idx < 0 || idx > this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    const removed = this.get(idx);
    removed.prev.next = removed.next;
    removed.next.prev = removed.prev;
    removed.next = null;
    removed.prev = null;
    this.length--;
    return removed;
  }
}

const list = new DoubleLinkedList();
list.push('one');
list.push('two');
list.push('three');
list.remove(1);
console.log(list);
