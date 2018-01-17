'use strict';

const highTwo = require('../lib/solution.js');

describe('solution module', function(){
  describe('#ValidateInputIsArray', function(){
    it('should return "Please supply an array of numbers only as an argument" if non-numbers are entered', function(){
      expect(highTwo([1, 2, 3, 4, "string", {}, 10]).toBe('Please supply an array of numbers only as an argument'));
    });
  });
    describe('#ValidateArrayOnlyNums', function(){
    it('should return "Please supply an array of numbers only as an argument" if a non-array is passed in', function(){
      expect(highTwo("string").toBe('Please supply an array of numbers only as an argument'));
    });
  });
  describe('Basic functionality - highest value and 2nd highest value', function(){
    it('should return the highest value in the array under "ultimate"', function(){
      expect(highTwo([2, 3, 4, 5, 10, 20])).toBe('{ ultimate: 20, penultimate: 10 }');

    });
  });
});
