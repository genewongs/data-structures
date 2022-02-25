var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.count = 0;
  return obj;
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


