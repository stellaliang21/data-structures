class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.i = 0;  
  }

  push(value) {
    this.i++;
    this.storage[this.i] = value;
  }

  pop() {
    if (this.i > 0) {
      var last = this.storage[this.i];
      delete this.storage[this.i];
      this.i--;
      return last;
    }
  }

  size() {
    return this.i;
  }
}