class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.i = 0;
    this.end = 0;

  }
  enqueue(value) {
    this.storage[this.i] = value;
    this.i++;
  }

  dequeue() {
    if (this.i > this.end) {
      var last = this.storage[this.end];
      delete this.storage[this.end];
      this.end++;
      return last;
    }
  }

  size() {
    return this.i - this.end;
  }

};
