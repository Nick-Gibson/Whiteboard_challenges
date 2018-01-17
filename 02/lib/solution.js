'use strict';

function highTwo(arr){
  arr.sort((a, b) => b - a);
  let result = {
    ultimate: arr[0],
    penultimate: arr[1],
  };
  return result;
};
