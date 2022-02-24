var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var keys = Object.keys(storage);
    var key = keys.length;
    storage[key] = value;
  };

  someInstance.pop = function() {
    var keys = Object.keys(storage);
    var key = keys[keys.length - 1];
    var toBeDeleted = storage[key];
    delete storage[key];
    return toBeDeleted;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
