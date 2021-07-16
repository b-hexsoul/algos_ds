// Visit neighbors at current depth first!
// Use a queue instead of a stack

// * Breadth First Search
// Accept starting vertex
// Create a queue and place the starting vertex in it
// Create an array to store the nodes visited
// Create an object to store nodes visited
// Mark the starting vertex as visited
// Loop as long as there is anything in the queue
// Remove the first vertex from the queue and push it into the array that stores nodes visited
// Loop over each vertex in the adjacency list for the vertex you are visiting
// If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex

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

  bfsIterative(start) {
    let queue = [start]; // this is a queue, FIFO, just push and shift
    let visited = {};
    let result = [];
    let loopcount = 0;

    visited[start] = true;
    while (queue.length) {
      let vertex = queue.shift();
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
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
console.log(graph.bfsIterative('F'));
