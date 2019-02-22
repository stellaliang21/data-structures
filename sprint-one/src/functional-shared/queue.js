var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  var someInstance = {};
  someInstance.i = 0;
  someInstance.end = 0;
  someInstance.storage = storage;


  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.i] = value;
    this.i++;

  },
  dequeue: function() {
    if (this.i > this.end) {
      var last = this.storage[this.end];
      delete this.storage[this.end];
      this.end++;
      return last;
    }

  },
  size: function() {
    return this.i - this.end;
  }
  
};


