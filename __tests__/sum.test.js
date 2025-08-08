const sum = require('../sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds multiple numbers', () => {
  expect(sum(1, 2, 3)).toBe(6);
  expect(sum(10, -10, 5)).toBe(5);
});

test('returns 0 when no arguments are passed', () => {
  expect(sum()).toBe(0);
});