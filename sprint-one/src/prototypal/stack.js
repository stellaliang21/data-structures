var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.i = 0;
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.i++;
  this.storage[this.i] = value;
};

stackMethods.pop = function() {
  if (this.i > 0) {
    var last = this.storage[this.i];
    delete this.storage[this.i];
    this.i--;
    return last;
    }
};

stackMethods.size = function() {
  return this.i;
};


