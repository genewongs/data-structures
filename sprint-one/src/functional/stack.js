var Stack = function() {
  var someInstance = {};
  var storage = {};
  var count = 0;

  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    var toBeDeleted = storage[count - 1];
    delete storage[count - 1];
    count--;
    return toBeDeleted;
  };

  someInstance.size = function() {
    return count < 0 ? 0 : count;
  };

  return someInstance;
};
