Array.prototype.bubbleSort = function() {
  var sorted = false;
  while (sorted === false) {
    sorted = true;
    for (var i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i+1]) {
        sorted = false;
        var first = this[i];
        this[i] = this[i+1];
        this[i+1] = first;
      }
    }
  }
  return this;
};


String.prototype.substrings = function () {
  let subs = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i+1; j <= this.length; j++) {
      subs.push(this.slice(i,j));
    }
  }
  return subs;
};
