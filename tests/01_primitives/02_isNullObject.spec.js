const isNullObject = require('../../01_primitives/02_isNullObject');

test('Check if null is an "object" (Special Exercise)', () => {
  expect(isNullObject(null)).toBe(true);
  expect(isNullObject(undefined)).toBe(false);
  expect(isNullObject(42)).toBe(false);
  expect(isNullObject("null")).toBe(false);
  expect(isNullObject({})).toBe(false);
});
