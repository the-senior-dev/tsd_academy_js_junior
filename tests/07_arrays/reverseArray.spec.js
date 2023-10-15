const reverseArray = require('../../src/07_arrays/reverseArray');

describe('reverseArray', () => {
    test('Reverses an array of integers', () => {
      expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
    });
  
    test('Reverses an array of strings', () => {
      expect(reverseArray(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
    });
  
    test('Reverses an empty array', () => {
      expect(reverseArray([])).toEqual([]);
    });
  
    test('Throws an error if the input is not an array', () => {
      expect(() => reverseArray('not an array')).toThrow('Input must be an array');
    });
  
    test('Reverses an array of mixed types', () => {
      expect(reverseArray([1, 'a', true])).toEqual([true, 'a', 1]);
    });
  });