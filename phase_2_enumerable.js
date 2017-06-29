Array.prototype.myEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};


Array.prototype.myMap = function(callback) {
  let new_arr = [];
  this.myEach(function(el)
    {new_arr.push(callback(el));}
  );
  return new_arr;
};

const reduc = function(acc, el) {return acc + el;};

Array.prototype.myReduce = function(callback, initialValue) {
  let acc = initialValue || 0;
  this.myEach(function(el) {
    acc = callback(acc, el);
  });
  return acc;
};
