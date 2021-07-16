// Explore as far as possible down one branch before 'backtracking'
// Deepen traversal before we widen it

// * We need to remember where we have been.

// Function should accept a starting node
// Create a list to store the end result, to be returned at the very end
// Create an object to store visited vertices
// Create a helper function which accepts a vertex
// -  Return early if vertex is empty
// -  Place the vertex it accepts into the visited object and push that vertex into the result array
// -  Loop over all of the values in the adjacencyList for that vertex
// -  If any of those values have not been visited, recursively invoke the helper function with that vertex

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

  dfsRecursive(start) {
    const visited = {};
    const result = [];
    const adjacencyList = this.adjacencyList;

    (function helper(vertex) {
      visited[vertex] = true;
      result.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          helper(neighbor);
        }
      });
    })(start);

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
console.log(graph.dfsRecursive('A'));
