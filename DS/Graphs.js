// ** What is a graph
// A collection of nodes and the connections between them

// ** Uses for a graph
// Social networks
// Location / Mapping
// Routing Algorithms
// Visual Hierarchy

// ** Types of Graphs
// Vertex - a Node
// Edge - connection between nodes
// Undirected Graph - no direction associated with edges
// Directed Graph - often represented with arrows
// Weighted Graph - assigning a value to the edges

// ** Storing Graphs: Adjacency Matrix
//

// ** Storing Graphs: Adjacency List
// The index in the list stores the edges (connections) to vertices (nodes)
const arrayList = [
  [1, 4],
  [0, 3],
  [1, 5, 3],
]; // 0 is connected to 1 and 4...

// Can also use a hash map
const list = {
  A: ['B', 'F'],
  B: ['A', 'C'],
  C: ['B', 'D'],
  D: ['C', 'E'],
  E: ['D', 'F'],
  F: ['E', 'A'],
};

// BIG O

// *Adjacency List
// Can take up less space (in sparse graphs)
// Faster to iterate over all edges
// Can be slower to lookup specific edge

// *Adjacency Matrix
// Takes up more space (in sparse graphs)
// Slower to iterate over all edges
// Faster to lookup specific edge
