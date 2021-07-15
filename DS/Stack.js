// LIFO
// Last element added to the stack will be the first element that is removed

// Used for:
// Call stack, manage function invocation, Undo/Redo, Routing(the history object), in Algorithms

// * Stack with an Array
// Just push and pop
// const stack = [];
// stack.push('google');
// stack.push('instagram');
// stack.push('youtube');
// stack.pop();

// Use a Linked List!
// When using a linked list, if using the tradition push and pop, you would have to traverse the linked list!
// Instead we will implement shift and unshift. Insertion and Deletion of the stack will be O(1);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.size = 0;
    this.first = this.last = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    this.size++;
  }

  pop() {
    if (!this.first) return null;
    const temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;
    return temp;
  }
}

const stack = new Stack();
stack.push('hello');
stack.push('world');
stack.push('colt');
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
stack.pop();
console.log(stack);
