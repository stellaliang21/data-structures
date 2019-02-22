var Stack = function() {
  
  var someInstance = {};
  someInstance.i = 0;
  someInstance.storage = {};

  _.extend(someInstance, stackMethods);
  return someInstance;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

 
};

var stackMethods = {
  push: function(value) {
    this.i++;
    this.storage[this.i] = value;
    
  },
  pop: function() {
    if (this.i > 0) {
    
    var last = this.storage[this.i];
    delete this.storage[this.i];
    this.i--;
    return last;
    }
    
  },
  size: function() {
    return this.i;
  }
};


