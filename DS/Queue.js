// FIFO
// First in First out!

// Use Cases
// background tasks, uploading resource, printing/ task processing

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// We will be using Push and Shift
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
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (!this.first) return null;
    if (this.first === this.last) {
      this.last = null;
    }
    const temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp;
  }
}
