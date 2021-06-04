// A data structure that contains a head, tail and length property.

// Linked Lists consist of nodes, and each node has a value and a pointer to another node or null

// Comparison to Arrays
// Linked lists do not have indexes, connected via nodes with a pointer, random access is not allowed, you have to traverse the list

// Arrays are indexed in order, insertion and deletion can be expensive, but can be quickly accessed at a specific index

// Node
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// SLL
// push, pop, shift, unshift, get, set, insert, remove, reverse

// BIG O
// Insertion - O(1)
// Removal - it depends... O(1) or O(N)
// Searching - O(N)
// Access - O(N)

class SinglyLinkedList {
  constructor() {
    this.length = 0
    this.head = this.tail = null
  }

  push(element) {
    this.length++
    if(!this.tail) {
      return this.head = this.tail = new Node(element)
    }

    const oldTail = this.tail
    this.tail = new Node(element)
    oldTail.next = this.tail

    return this
  }

  // with a SinglyLinkedList you need to traverse through from the head
  pop() {
    if(!this.tail) {
      return undefined
    }

    if(this.head === this.tail) {
      let deleted = this.head
      this.head = this.tail = null
      this.length--
      return deleted
    }

    let currentNode = this.head
    const removed = this.tail

    while(currentNode) {
      if (currentNode.next === this.tail) {
        this.tail = currentNode
      }
      currentNode = currentNode.next
    }
    this.length--
    return removed
  }

  shift() {
    if(!this.head) {
      return undefined
    }

    const removed = this.head
    this.length--

    if(this.head === this.tail) {
      this.head = this.tail = null
      return removed
    }

    this.head = this.head.next
    removed.next = null
    return removed
  }

  unshift(element) {
    this.length++
    if (!this.head) {
      return this.head = this.tail = new Node(element)
    }

    const oldHead = this.head
    this.head = new Node(element)
    this.head.next = oldHead
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) {
      return null
    } 
    let counter = 0
    let currentNode = this.head
    while(counter !== idx) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }

  set(idx, value) {
    const foundNode = this.get(idx);
    if(foundNode) {
      foundNode.value = value
      return true;
    }

    return false;
  }

  insert(idx, value) {
    if (idx < 0 || idx > this.length) {
      return false
    }

    if (idx === this.length) {
      return this.push(value)
    }

    if (idx === 0) {
      return this.unshift(value)
    }

    const pre = this.get(idx - 1);
    const after = pre.next
    const newNode = new Node(value)
    newNode.next = after
    pre.next = newNode
    this.length++
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined
    if (idx === 0) return this.shift()
    if (idx === this.length - 1) return this.pop()

    const prev = this.get(idx - 1)
    const removed = prev.next
    const nextN = removed.next
    prev.next = nextN
    removed.next = null
    return removed
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;

    while(node) {
      let next = node.next
      node.next = prev
      prev = node
      node = next
    }

    return this
  }
}

const list = new SinglyLinkedList()
list.push('zero')
list.push('one')
list.push('two')

console.log(list.reverse())
