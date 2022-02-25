var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(val) {
  var keys = Object.keys(this.storage);
  var key = keys.length;
  this.storage[key] = val;
};

Stack.prototype.pop = function() {
  var keys = Object.keys(this.storage);
  var key = keys[keys.length - 1];
  var toBeDeleted = this.storage[key];
  delete this.storage[key];
  return toBeDeleted;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};
