var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0;
  var start = 0;
  
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if (size > start) {
      var value = storage[start];
      delete storage[start];
      start++;
      return value;
    }
  };

  someInstance.size = function() {
    return size - start;
  };

  return someInstance;
};
