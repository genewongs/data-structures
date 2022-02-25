class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.back = 0;
  }

  enqueue(val) {
    this.storage[this.back] = val;
    this.back++;
  }

  dequeue() {
    var toBeDeleted = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return toBeDeleted;
  }

  size() {
    return (this.back - this.front) < 0 ? 0 : (this.back - this.front);
  }
}
