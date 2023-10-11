import { randomNum } from '../utils/tools';
import { test, expect } from '@jest/globals';
test('测试随机数', () => {
  const result = randomNum();
  expect(result.length).toBe(4);
  expect(new Set(result).size).toBe(4);
  result.forEach(item => {
    expect(item).toBeGreaterThanOrEqual(0);
    expect(item).toBeLessThanOrEqual(9);
  });
});
