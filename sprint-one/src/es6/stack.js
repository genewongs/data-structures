class Stack {
  constructor() {
    this.storage = {};
  }

  push(val) {
    var keys = Object.keys(this.storage);
    var key = keys.length;
    this.storage[key] = val;
  }

  pop() {
    var keys = Object.keys(this.storage);
    var key = keys[keys.length - 1];
    var toBeDeleted = this.storage[key];
    delete this.storage[key];
    return toBeDeleted;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}