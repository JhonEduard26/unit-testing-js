const {
  average,
  divide,
  multiply,
  sum,
} = require('./02-math');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test("divide 10 / 2 to equal 5", () => {
  expect(divide(10, 2)).toBe(5);
});


test('divide by zero should be null', () => {
  expect(divide(10, 0)).toBeNull();
});

test('adds 2 * 3 to equal 6', () => {
  expect(multiply(10, 3)).toBe(30);
});

test('average of two numbers', () => {
  expect(average(3, 2)).toBe(2.5);
});