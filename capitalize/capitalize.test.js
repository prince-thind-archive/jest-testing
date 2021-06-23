import capitalize from './capitalize.js';

test.skip('non-strings', () => {
  expect(capitalize(NaN)).toBe(null);
  expect(capitalize(null)).toBe(null);
  expect(capitalize(undefined)).toBe(null);
  expect(capitalize('1234567890')).toBe(null);
  expect(capitalize()).toBe(null);
});

test.skip('example 1', () => {
  expect(capitalize('prince')).toBe('Prince');
});

test.skip('example 2', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test.skip('example 3', () => {
  expect(capitalize('Hello')).toBe('Hello');
});
