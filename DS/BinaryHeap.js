// Another category of trees!

// Min and Max Heaps
//  Max Binary Heap - parent nodes are always larger than child nodes
//  Min Binary Heap - parent nodes are always smaller than child nodes

// There is no order like a Binary Search Tree!
// Binary... so at most two child nodes
// A binary heap is as compact as possible. ALl the children of each node are as full as they can be and left children are filled out first

// Where are heaps used in the real world??
//  Binary Heaps are used to implement Priority Queues!

// You can represent a binary heap in an array!
//  For any index of an array n...
//    The left child is stored at 2n + 1
//    The right child is stored at 2n + 2

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(data) {
    this.values.push(data);
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (this.values[index] > this.values[parentIndex]) {
      let temp = this.values[index];
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = temp;

      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }
}

const heap = new MaxBinaryHeap();
heap.insert(2);
heap.insert(20);
heap.insert(5);
console.log(heap);
heap.insert(200);

console.log(heap);
