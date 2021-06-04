// Node 

class Node{
  constructor(value) {
    this.value = value
    this.next = this.prev = null
  }
}

// DLL
// push, pop, unshift, shift, get, set, insert, remove

class DoubleLinkedList {
  constructor() {
    this.length = 0
    this.head = this.tail = null
  }

  push(element) {
    this.length++
    if (!this.tail) return this.head = this.tail = new Node(element)

    const oldTail = this.tail
    this.tail = new Node(element)
    oldTail.next = this.tail
    this.tail.prev = oldTail
    return this
  }

  pop() {
    this.length--
    if (this.length === 0) {
      const removed = this.tail
      this.head = this.tail = null
      return removed
    }

    const removed = this.tail
    const prev = removed.prev
    prev.next = null
    removed.prev = null
    this.tail = prev
    
    return removed
  }

  unshift(element) {
    this.length++
    if (!this.head) return this.head = this.tail = new Node(element)

    const oldHead = this.head
    this.head = new Node(element)
    this.head.next = oldHead
    oldHead.prev = this.head
    return this
  }

  shift() {
    this.length--
    if (this.length === 0) {
      const removed = this.head
      this.head = this.tail = null
      return removed
    }

    const removed = this.head
    this.head = removed.next
    this.head.prev = null
    removed.next = null
    return removed
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return undefined

    if (idx === 0) return this.shift()
    if (idx === this.length - 1) return this.pop()
    
    let current = this.head
    let count = 0
    while(current) {
      if (count === idx) return current
      count++
      current = current.next
    }
  }

  set(idx, value) {
    const node = this.get(idx)
    if (node) {
      node.value = value
      return true
    }
    return false
  }

  insert(idx, value) {
    if (idx < 0 || idx > this.length) return undefined
    if (idx === 0) return this.unshift(element)
    if (idx === this.length) return this.push(element)

    
  }

  remove(idx) {

  }
}

const list = new DoubleLinkedList()
list.push('one')
list.push('two')
list.push('three')
console.log(list.set(1, 'im two!'))
console.log(list)