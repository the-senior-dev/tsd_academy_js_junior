const compareObjects = require('../05_object_comparison/compareObjects');

test('compares two objects with the same properties and values', () => {
  expect(compareObjects({ a: 1, b: 2 }, { a: 1, b: 2 })).toBe(true);
});

test('compares two objects with different properties', () => {
  expect(compareObjects({ a: 1 }, { a: 1, b: 2 })).toBe(false);
});

test('compares two objects with the same properties but different values', () => {
  expect(compareObjects({ a: 1, b: 2 }, { a: 1, b: 3 })).toBe(false);
});

test('compares two nested objects', () => {
  expect(compareObjects({ a: { b: 1 }}, { a: { b: 1 }})).toBe(true);
});

test('compares two nested objects with different values', () => {
  expect(compareObjects({ a: { b: 1 }}, { a: { b: 2 }})).toBe(false);
});
