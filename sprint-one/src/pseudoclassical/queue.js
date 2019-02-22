var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.someInstance = {};
  this.i = 0;
  this.end = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.i] = value;
  this.i++;
};

Queue.prototype.dequeue = function() {
  if (this.i > this.end) {
    var last = this.storage[this.end];
    delete this.storage[this.end];
    this.end++;
    return last;
  }
};

Queue.prototype.size = function() {
  return this.i - this.end;
};

