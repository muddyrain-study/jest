import { isRepeat } from '../utils/tools';
import { test, expect } from '@jest/globals';

test('参数为string类型的数组', () => {
  expect(isRepeat(['1', '1', '3', '4'])).toBe(true);
  expect(isRepeat(['1', '4', '2', '3'])).toBe(false);
});
test('参数为number类型的数组', () => {
  expect(isRepeat([1, 4, 4, 3])).toBe(true);
  expect(isRepeat([1, 2, 3, 4])).toBe(false);
});
