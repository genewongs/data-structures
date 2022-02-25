var Stack = function() {
  var obj = {};
  obj.count = 0;
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
    this.storage[this.count] = val;
    this.count++;
  },

  pop: function() {
    var toBeDeleted = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count--;
    return toBeDeleted;
  },

  size: function() {
    return this.count < 0 ? 0 : this.count;
  }
};


