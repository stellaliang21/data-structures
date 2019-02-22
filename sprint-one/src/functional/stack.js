var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {}; 
  var i = 0; // set a counter for the key
  // Implement the methods below
  someInstance.push = function(value) {
    storage[i] = value; //set the i to the value
    i++;  //increase i to 1
    return storage;
    
    
  };

  someInstance.pop = function() {
    if (i > 0) {
      i--; //decrease i by 1
      var value = storage[i]; // set value to the last key of the object
      delete storage[i]; //remove the last key
      return value; // return the value that you deleted 
    }

  };

  someInstance.size = function() {
    return i; // the length
 
  };

  return someInstance;
};
