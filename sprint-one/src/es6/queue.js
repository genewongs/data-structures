class Queue {
  constructor() {
    this.storage = {};
  }

  enqueue(val) {
    var keys = Object.keys(this.storage);
    var key = keys[keys.length - 1] + 1;
    this.storage[key] = val;
  }

  dequeue() {
    var keys = Object.keys(this.storage);
    var key = keys[0];
    var toBeDeleted = this.storage[key];
    delete this.storage[key];
    return toBeDeleted;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
