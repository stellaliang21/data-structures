var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.i = 0;
  someInstance.end = 0;
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.i] = value;
  this.i++;
};

queueMethods.dequeue = function() {
  if (this.i > this.end) {
    var last = this.storage[this.end];
    delete this.storage[this.end];
    this.end++;
    return last;
  }
};

queueMethods.size = function() {
  return this.i - this.end;
};

