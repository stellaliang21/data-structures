var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  this.storage = {};
  this.someInstance = {};
  this.i = 0;
  // someInstance.storage = storage;
};

Stack.prototype.push = function(value) {
  this.i++;
  this.storage[this.i] = value;
};

Stack.prototype.pop = function() {
  if (this.i > 0) {
    var last = this.storage[this.i];
    delete this.storage[this.i];
    this.i--;
    return last;
  }
};

Stack.prototype.size = function() {
  return this.i;
}

console.log('hello')