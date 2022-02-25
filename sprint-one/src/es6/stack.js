class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(val) {
    this.storage[this.count] = val;
    this.count++;
  }

  pop() {
    var toBeDeleted = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count--;
    return toBeDeleted;
  }

  size() {
    return this.count < 0 ? 0 : this.count;
  }
}