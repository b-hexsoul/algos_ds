// *Trees!*
// A data structure that consists of nodes in a parent/child relationship
// Trees are non linear

// *Terminology*
/*
Root - The top node in a tree.
Child - A node directly connected to another node when moving away from the Root.
Parent - The converse notion of a child
Siblings - A group of nodes with the same parent.
Leaf - A node with no children
Edge - The connection between one node and another.
*/

// *Use Cases*
/*
HTML DOM
Network Routing
Abstract Syntax Tree
AI
File Systems
*/

// *Binary Search Trees
// Each parent has two child nodes at most
// Sorted in a particular way - Every child node to the left of the parent is always less

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  contains(value) {
    let current = this.root;
    if (!current) return false;

    while (true) {
      if (current === null) {
        return false;
      }

      if (value === current.value) {
        return true;
      }

      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      }
    }
  }
}
//        50
//    30      70
//  25  40  60  75

const tree = new BinarySearchTree();
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(40);
tree.insert(60);
tree.insert(25);
tree.insert(75);
console.log(tree.contains(30));
console.log(tree.contains(22));
