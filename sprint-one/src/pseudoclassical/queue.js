var Queue = function() {
  this.storage = {};
  this.front = 0;
  this.back = 0;
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.back] = val;
  this.back++;
};

Queue.prototype.dequeue = function() {
  var toBeDeleted = this.storage[this.front];
  delete this.storage[this.front];
  this.front++;
  return toBeDeleted;
};

Queue.prototype.size = function() {
  return (this.back - this.front) < 0 ? 0 : (this.back - this.front);
};
