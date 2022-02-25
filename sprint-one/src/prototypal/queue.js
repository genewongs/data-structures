var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.front = 0;
  obj.back = 0;
  return obj;
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
  },
};


