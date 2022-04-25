// FIFO
// First in First out!

// Use Cases
// background tasks, uploading resource, printing/ task processing
// we are push() and shift()
// Big O - Insertion and Removal are O(1)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = this.last = newNode;
    } else {
      // add to the end of the list
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

  peek() {
    !this.first ? null : this.first.value;
  }
}

const queue = new Queue();
queue.enqueue("hello");
queue.enqueue("world");
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
