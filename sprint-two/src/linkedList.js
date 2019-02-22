var LinkedList = function() {
  var list = {};
  
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var nodeCreate = Node(value);
    if (list.head === null && list.tail === null) {
      list.head = nodeCreate;
      list.tail = nodeCreate;
    } else {
      nodeCreate.next = value;
      list.tail = nodeCreate;
    }
  };

  list.removeHead = function() {
  };

  list.contains = function(target) {
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
