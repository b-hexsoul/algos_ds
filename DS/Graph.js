// Building an undirected graph

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
}

const graph = new Graph();
graph.addVertex('Tokyo');
graph.addVertex('Dallas');
graph.addVertex('Aspen');
graph.addVertex('Hong Kong');
graph.addVertex('Los Angeles');
graph.addEdge('Tokyo', 'Dallas');
graph.addEdge('Tokyo', 'Hong Kong');
graph.addEdge('Dallas', 'Hong Kong');
graph.addEdge('Dallas', 'Aspen');
graph.addEdge('Dallas', 'Los Angeles');
graph.addEdge('Hong Kong', 'Los Angeles');
console.log(graph.adjacencyList);
graph.removeVertex('Dallas');
console.log(graph.adjacencyList);
