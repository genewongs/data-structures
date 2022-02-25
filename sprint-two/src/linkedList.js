var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create new node variable
    var newNode = new Node(value);
    // check if list.head is null
    if (list.head === null) {
      // if null, add new node as head
      list.head = newNode;
    } else {
      // if not null, add new node to tail.next
      list.tail.next = newNode;
    }
    // assign new node to tail
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
 */
