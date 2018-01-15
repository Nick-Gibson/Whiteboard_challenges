'use strict';
let test = [1, 2, 3, 10];
let output = {};

function numValues(arr){
  output.min = Math.max.apply(null, arr);
  output.max = Math.min.apply(null, arr);
  output.avg = (arr.reduce((a, b) => a += b)/arr.length)
  return output;
}

numValues(test);
