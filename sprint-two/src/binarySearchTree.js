var BinarySearchTree = function(value) {
  var tree = Object.create(binaryMethods);
  tree.value = value;
  tree.right = null;
  tree.left = null;
  return tree;
};

var binaryMethods = {
  insert: function(value) {
    if (this.value > value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else if (this.value < value) {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  },

  contains: function(value) {
    //base case
    if (this.value === value) {
      return true;
    }

    if (this.value > value) {
      if (this.left !== null) {
        return this.left.contains(value);
      }
    }
    if (this.value < value) {
      if (this.right !== null) {
        return this.right.contains(value);
      }
    }
    return false;
  },

  depthFirstLog: function(cb) {
    var depthFirst = function(tree) {
      cb(tree.value);

      if (tree.left !== null) {
        depthFirst(tree.left);
      }

      if (tree.right !== null) {
        depthFirst(tree.right);
      }
    };
    depthFirst(this);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
insert: o(logn)

contains: (log n)

depth: o(n) linear
 */
