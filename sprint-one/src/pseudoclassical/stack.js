var Stack = function() {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(val) {
  this.storage[this.count] = val;
  this.count++;
};

Stack.prototype.pop = function() {
  var toBeDeleted = this.storage[this.count - 1];
  delete this.storage[this.count - 1];
  this.count--;
  return toBeDeleted;
};

Stack.prototype.size = function() {
  return this.count < 0 ? 0 : this.count;
};
