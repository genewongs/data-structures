var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (list.head === null) {
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    if (list.head === null) {
      return;
    }
    var currentHead = list.head.value;
    list.head = list.head.next;
    return currentHead;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
addToTail = o(1)

removeTail = o(1)

contains = o(N)
 */
