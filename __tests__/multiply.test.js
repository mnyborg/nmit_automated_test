const multiply = require('../multiply');

test('multiply 1 and 2 to equal 2', () => {
  expect(multiply(1, 2)).toBe(2);
});

test('multiply multiple numbers', () => {
  expect(multiply(1, 2, 3)).toBe(6);
  expect(multiply(10, -10, 5)).toBe(-100);
});

test('returns 1 when no arguments are passed', () => {
  expect(multiply()).toBe(1);
});