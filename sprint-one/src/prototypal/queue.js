var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.storage = {};
  return obj;
};

var queueMethods = {
  enqueue: function(val) {
    var keys = Object.keys(this.storage);
    var key = keys[keys.length - 1] + 1;
    this.storage[key] = val;
  },

  dequeue: function() {
    var keys = Object.keys(this.storage);
    var key = keys[0];
    var toBeDeleted = this.storage[key];
    delete this.storage[key];
    return toBeDeleted;
  },

  size: function() {
    return Object.keys(this.storage).length;
  },
};


