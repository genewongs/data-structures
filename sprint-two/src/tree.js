
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
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
    return true;
  }

  if (this.children.length === 0) {
    return;
  }

  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      var result = this.children[i].contains(target);
      if (result) {
        return true;
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
addChild = o(1)

contains = o(N)
 */
