var Stack = function() {
  var obj = {};
  obj.storage = {};
  extend(obj, stackMethods);
  return obj;
};

var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};

var stackMethods = {
  push: function(val) {
    var keys = Object.keys(this.storage);
    var key = keys.length;
    this.storage[key] = val;
  },

  pop: function() {
    var keys = Object.keys(this.storage);
    var key = keys[keys.length - 1];
    var toBeDeleted = this.storage[key];
    delete this.storage[key];
    return toBeDeleted;
  },

  size: function() {
    return Object.keys(this.storage).length;
  }
};


