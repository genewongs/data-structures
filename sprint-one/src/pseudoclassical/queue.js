var Queue = function() {
  this.storage = {};
};


Queue.prototype.enqueue = function(val) {
  var keys = Object.keys(this.storage);
  var key = keys[keys.length - 1] + 1;
  this.storage[key] = val;
};

Queue.prototype.dequeue = function() {
  var keys = Object.keys(this.storage);
  var key = keys[0];
  var toBeDeleted = this.storage[key];
  delete this.storage[key];
  return toBeDeleted;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};
