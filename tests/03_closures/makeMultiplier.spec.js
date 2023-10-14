const makeMultiplier = require('../../src/03_closures/makeMultiplier');

test('Check multiplier function for 2', () => {
  const multiplyByTwo = makeMultiplier(2);
  expect(multiplyByTwo(3)).toBe(6);
  expect(multiplyByTwo(4)).toBe(8);
});

test('Check multiplier function for 10', () => {
  const multiplyByTen = makeMultiplier(10);
  expect(multiplyByTen(3)).toBe(30);
  expect(multiplyByTen(4)).toBe(40);
});
