var Queue = function() {
  var obj = {};
  obj.storage = {};
  obj.front = 0;
  obj.back = 0;
  extend(obj, queueMethods);
  return obj;
};

var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};

var queueMethods = {
  enqueue: function(val) {
    this.storage[this.back] = val;
    this.back++;
  },

  dequeue: function() {
    var toBeDeleted = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return toBeDeleted;
  },

  size: function() {
    return (this.back - this.front) < 0 ? 0 : (this.back - this.front);
  }
};


