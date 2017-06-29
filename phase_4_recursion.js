function range(start,end) {
  if (start === end) {
    return [start];
  }
  return [start].concat(range(start+1, end));
}


function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + sumRec(arr.slice(1,arr.length));
}

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exponent(base, exp-1);
}

function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return base;
  }
  if (exp % 2 === 0) {
    return Math.pow(exponent2(base, exp/2),2);
  } else {
    return base * Math.pow(exponent2(base, (exp-1)/2),2);
  }
}

function fibonacci(n) {

  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0,1];
  }

  let prev = fibonacci(n-1);
  return prev.concat([prev.slice(-2)[0] + prev.slice(-1)[0]]);

}

function bsearch(arr, target) {
if (arr.length === 0) {
  return -1;
}
if (arr.length === 1) {
  if (arr[0] === target) {
    return 0;
  } else {
    return (-1);
  }
}
let half = Math.floor(arr.length / 2);
if (arr[half] === target) {
  return half;
} else if (arr[half] < target) {
  let result = bsearch(arr.slice(half), target);
  if (result !== -1) {
    return result + half;
  }
} else {
  return bsearch(arr.slice(0,half), target);
}
return -1;
}

function mergesort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let half = Math.floor(arr.length / 2);
  let left = arr.slice(0, half);
  let right = arr.slice(half, arr.length);
  return merge(mergesort(left), mergesort(right));
}

function merge(arr1, arr2) {
  let left = arr1;
  let right = arr2;
  let sorted_array = [];
  while (left.length !== 0 && right.length !== 0) {
    if (left[0] < right[0]) {
      sorted_array.push(left.shift());
    } else {
      sorted_array.push(right.shift());
    }
  }
  return sorted_array.concat(left.concat(right));
}

function subsets(arr) {
  if (arr.length === 0) {
    return [[]];
  }
  const first = arr[0];
  let prev = subsets(arr.slice(1));
  let prev_add = prev.map(function(el) {
    [first].concat(el);
  });
  return prev.concat(prev_add);
}
