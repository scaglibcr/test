import { add } from '../src/index';

test('empty string should result in zero', () => {
  expect(add('')).toBe(0);
});

test('a single number should result in the number itself.', () => {
    expect(add('5')).toBe(5);
});

