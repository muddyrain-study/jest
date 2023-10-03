const { sum } = require('./tools.js');
/**
 * 该文件就是一个测试文件
 * 在该文件中，我们会抒写一个一个测试用例
 * 安装了 jest 之后 默认会提供一些全局方法
 * test、expect、jest
 */

/**
 * 一个 test 方法 意味着抒写了一个测试用例
 * param1: 测试用例的描述
 * param2: 测试用例的回调函数
 */
test('测试加法', () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
