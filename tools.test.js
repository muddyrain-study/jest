const {
  describe,
  expect,
  test,
  beforeEach,
  afterEach,
  beforeAll,
  afterAll,
  jest: Jest,
} = require('@jest/globals');
const { sum, sub, mul, div } = require('./tools.js');

test('测试加法', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sub(10, 5)).toBe(5);
  expect(mul(2, 3)).toBe(6);
  expect(div(10, 2)).toBe(5);
});
