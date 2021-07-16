// Explore as far as possible down one branch before 'backtracking'
// Deepen traversal before we widen it

// * We need to remember where we have been.

// * ITERATIVE SOLUTION *
// Function should accept a starting node
// Create a list to store the end result, to be returned at the very end
// Create an object to store visited vertices

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) return false;
    this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      if (!this.adjacencyList[v1].includes(v2)) this.adjacencyList[v1].push(v2);
      if (!this.adjacencyList[v2].includes(v1)) this.adjacencyList[v2].push(v1);
    }
  }

  removeEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
    }
  }

  removeVertex(v) {
    let vertexToDelete = this.adjacencyList[v];

    for (let i = 0; i < vertexToDelete.length; i++) {
      let vertexItem = vertexToDelete[i];

      this.adjacencyList[vertexItem] = this.adjacencyList[vertexItem].filter((e) => e !== v);
    }

    delete this.adjacencyList[v];
  }

  dfsIterative(start) {
    let stack = [start]; // this is a stack, LIFO, just push and pop
    let visited = {};
    let result = [];
    let loopcount = 0;

    visited[start] = true;
    while (stack.length) {
      let vertex = stack.pop();
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
      loopcount++;
    }
    console.log('count', loopcount);
    return result;
  }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('F', 'E');
console.log(graph.adjacencyList);
console.log(graph.dfsIterative('A'));
