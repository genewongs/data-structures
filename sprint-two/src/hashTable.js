var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage[index]) {
    for (var x = 0; x < this._storage[index].length; x++) {
      if (this._storage[index][x][0] === k) {
        this._storage[index][x][1] = v;
        break;
      }
    }
    this._storage[index].push([k, v]);
  } else {
    this._storage[index] = [];
    this._storage[index].push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var main = this._storage[index];

  if (main.length > 0) {
    for (var i = 0; i < main.length; i++) {
      var currentArr = main[i];
      if (currentArr[0] === k) {
        return currentArr[1];
      }
    }
  }

  return this._storage.get(index) === undefined ? undefined :
    this._storage.get(index)[0][1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var indexArray = this._storage[index];

  for (var x = 0; x < this._storage[index].length; x++) {
    if (this._storage[index][x][0] === k) {
      this._storage[index].splice(x, 1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
insert: o(n)
retrieve: o(n)
remove: o(n2) quadratic
 */



