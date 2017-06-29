Array.prototype.uniq = function() {
  let new_array = [];
    for (var i = 0; i < this.length; i++) {
      if (!new_array.includes(this[i])) {
      new_array.push(this[i]);
      console.log(this);
      }
    }
  return new_array;
};

Array.prototype.twoSum = function () {
  let new_arr = [];
  for (var i = 0; i < this.length-1; i++) {
    for (var j = i+1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        new_arr.push([i,j]);
      }
    }
  }
  return new_arr;
};

Array.prototype.transpose = function (){
  let new_matrix = [];
  const rows = this.length;
  const cols = this[0].length;

  for (var i = 0; i < cols; i++) {
    const new_array = [];

    for (var j = 0; j < rows; j++) {
      new_array.push(this[j][i]);
      console.log(this[j][i]);
    }
    new_matrix.push(new_array);
  }
  return new_matrix;
};
