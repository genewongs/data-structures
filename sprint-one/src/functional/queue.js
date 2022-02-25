var Queue = function() {
  var someInstance = {};
  var storage = {};
  var front = 0;
  var back = 0;

  someInstance.enqueue = function(value) {
    storage[back] = value;
    back++;
  };

  someInstance.dequeue = function() {
    var toBeDeleted = storage[front];
    delete storage[front];
    front++;
    return toBeDeleted;
  };

  someInstance.size = function() {
    return (back - front) < 0 ? 0 : (back - front);
  };

  return someInstance;
};
