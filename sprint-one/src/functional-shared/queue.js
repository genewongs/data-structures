var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
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
  }
};


