// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
// node = 3 or some value
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {edges: []};
  // Object.assign(this.nodes, newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // return this.nodes.node ? true : false;
  var key = node.toString();

  return this.nodes[key] ? true : false;

  // for (var key in this.nodes) {
  //   if (key === node.toString()) {
  //     return true;
  //   }
  // }
  // return false;


};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // edges will be an array

  //this.nodes[fromNode].push([toNode])

  //make sure to connect vice versa
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


