'use strict';

module.exports = function highTwo(arr){
  if(typeof(arr) !== 'array'){
    return 'Please supply an array of numbers only as an argument';
  }
  function numberTest(a){
    if(typeof(a) === 'number'){
      return true;
    }
  }
  if (!arr.every(numberTest)){
    return 'Please supply an array of numbers only as an argument';
  }
  arr.sort((a, b) => b - a);
  let result = {
    ultimate: arr[0],
    penultimate: arr[1],
  };
  return result;
};
