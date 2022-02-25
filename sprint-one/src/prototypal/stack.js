var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.storage = {};
  return obj;
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


