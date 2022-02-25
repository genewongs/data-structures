var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = new Tree(value);
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  if (this.value === target) {

  }

  // base case, no children:
  if (this.children.length === 0) {
    return;
  }

  //if children array is greater than 0
  if (this.children.length > 0) {

  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
