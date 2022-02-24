var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
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
    //push adds to very end
    //get keys
    //get last element in keys
    //set obj at keys as value
    var keys = Object.keys(this.storage);
    var key = keys.length;
    this.storage[key] = val;
  },

  pop: function() {
    var keys = Object.keys(this.storage);
    var key = keys[keys.length - 1];
    var toBeDeleted = this.storage[key];
    delete this.storage[key];
    return toBeDeleted;
  },

  size: function() {
    return Object.keys(this.storage).length;
  }
};


