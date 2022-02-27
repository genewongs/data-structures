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
  var key = node.toString();
  return this.nodes[key] ? true : false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var edgeArray = this.nodes[node].edges;
  if (edgeArray.length > 0) {
    for (var i = 0; i < edgeArray.length; i++) {
      this.removeEdge(edgeArray[i], node);
    }
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].edges.indexOf(toNode) >= 0;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edges.push(toNode);
  this.nodes[toNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromNodeArray = this.nodes[fromNode].edges;
  if (fromNodeArray.indexOf(toNode) !== - 1) {
    var indexToSlice = fromNodeArray.indexOf(toNode);
    fromNodeArray.splice(indexToSlice, 1);
  } else {
    return;
  }
  this.removeEdge(toNode, fromNode);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
addNode = o(1)
contains = o(1)
removeNode = o(n2) quadratic
hasEdge = o(n) lineaer
addEdge = o(1)
removeEdge = o(n2) quadratic
forEachNode = o(n)
 */


