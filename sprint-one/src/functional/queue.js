var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value) {
    var keys = Object.keys(storage);
    var key = keys[keys.length - 1] + 1;
    storage[key] = value;
  };

  someInstance.dequeue = function() {
    var keys = Object.keys(storage);
    var targetKey = keys[0];
    var toBeDeleted = storage[targetKey];
    delete storage[targetKey];
    return toBeDeleted;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
