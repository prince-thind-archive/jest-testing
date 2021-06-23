import calculator from './calculator';

test.skip('add-input-invalid', () => {
  expect(calculator.add()).toBe(null);
  expect(calculator.add(null, null)).toBe(null);
  expect(calculator.add(NaN, NaN)).toBe(null);
  expect(calculator.add([], null)).toBe(null);
  expect(calculator.add(null, '')).toBe(null);
  expect(calculator.add(null)).toBe(null);
  expect(calculator.add(undefined)).toBe(null);
  expect(calculator.add(Infinity)).toBe(null);
  expect(calculator.add(Infinity,Infinity)).toBe(null);
  expect(calculator.add('blah', 'blah')).toBe(null);
  expect(calculator.add('blah')).toBe(null);
});
test.skip('subtract-input-invalid', () => {
  expect(calculator.subtract()).toBe(null);
  expect(calculator.subtract(null, null)).toBe(null);
  expect(calculator.subtract(NaN, NaN)).toBe(null);
  expect(calculator.subtract([], null)).toBe(null);
  expect(calculator.subtract(null, '')).toBe(null);
  expect(calculator.subtract(Infinity)).toBe(null);
  expect(calculator.subtract(Infinity,Infinity)).toBe(null);
  expect(calculator.subtract(null)).toBe(null);
  expect(calculator.subtract(undefined)).toBe(null);
  expect(calculator.subtract('blah', 'blah')).toBe(null);
  expect(calculator.subtract('blah')).toBe(null);
});

test.skip('multiply-input-invalid', () => {
  expect(calculator.multiply()).toBe(null);
  expect(calculator.multiply(null, null)).toBe(null);
  expect(calculator.multiply(NaN, NaN)).toBe(null);
  expect(calculator.multiply([], null)).toBe(null);
  expect(calculator.multiply(null, '')).toBe(null);
  expect(calculator.multiply(Infinity)).toBe(null);
  expect(calculator.multiply(Infinity,Infinity)).toBe(null);
  expect(calculator.multiply(null)).toBe(null);
  expect(calculator.multiply(undefined)).toBe(null);
  expect(calculator.multiply('blah', 'blah')).toBe(null);
  expect(calculator.multiply('blah')).toBe(null);
});
test.skip('division-input-invalid', () => {
  expect(calculator.division()).toBe(null);
  expect(calculator.division(null, null)).toBe(null);
  expect(calculator.division(NaN, NaN)).toBe(null);
  expect(calculator.division([], null)).toBe(null);
  expect(calculator.division(Infinity)).toBe(null);
  expect(calculator.division(Infinity,Infinity)).toBe(null);
  expect(calculator.division(null, '')).toBe(null);
  expect(calculator.division(null)).toBe(null);
  expect(calculator.division(undefined)).toBe(null);
  expect(calculator.division('blah', 'blah')).toBe(null);
  expect(calculator.division('blah')).toBe(null);
});

test.skip('add', () => {
  expect(calculator.add(4, 3)).toBe(7);
  expect(calculator.add(0, 5)).toBe(5);
  expect(calculator.add(0, 0)).toBe(0);
  expect(calculator.add(-5, 6)).toBe(1);
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
});
test.skip('subtract', () => {
  expect(calculator.subtract(4, 3)).toBe(1);
  expect(calculator.subtract(0, 5)).toBe(-5);
  expect(calculator.subtract(0, 0)).toBe(0);
  expect(calculator.subtract(-5, 6)).toBe(-11);
  expect(calculator.subtract(0.1, 0.2)).toBeCloseTo(-0.1);
});
test.skip('multiply', () => {
  expect(calculator.multiply(4, 3)).toBe(12);
  expect(calculator.multiply(0, 5)).toBe(0);
  expect(calculator.multiply(0, 0)).toBe(0);
  expect(calculator.multiply(-5, 6)).toBe(-30);
  expect(calculator.multiply(0.1, 0.2)).toBeCloseTo(0.02);
});
test.skip('divsion', () => {
  expect(calculator.division(4, 0)).toBe(null);
  expect(calculator.division(0, 5)).toBe(0);
  expect(calculator.division(0, 0)).toBe(null);
  expect(calculator.division(-5, 5)).toBe(-1);
  expect(calculator.division(0.1,0.2)).toBeCloseTo(0.5);
});
