const getDataType = require('../../01_primitives/01_getDataType');

test('Check data type of "Hello, world!"', () => {
  expect(getDataType("Hello, world!")).toBe("string");
});

test('Check data type of 42', () => {
  expect(getDataType(42)).toBe("number");
});

test('Check data type of 9007199254740991n', () => {
  expect(getDataType(9007199254740991n)).toBe("bigint");
});

test('Check data type of null', () => {
  expect(getDataType(null)).toBe("object");
});

test('Check data type of undefined', () => {
  expect(getDataType(undefined)).toBe("undefined");
});

test('Check data type of true', () => {
  expect(getDataType(true)).toBe("boolean");
});

test('Check data type of Symbol()', () => {
  expect(getDataType(Symbol())).toBe("symbol");
});
