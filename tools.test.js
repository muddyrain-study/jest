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

test('基本演示', () => {
  const mock = Jest.fn();
  // 设置返回值为 42
  mock.mockReturnValue(42);
  expect(mock()).toBe(42);
});

test('内置实现', () => {
  const mock = Jest.fn(x => 100 + x);
  expect(mock(1)).toBe(101);
});

const arr = [1, 2, 3];

function forEach(arr, callback) {
  for (let index = 0; index < arr.length; index++) {
    callback(arr[index]);
  }
}

test('测试forEach是否正确', () => {
  // 由于 forEach 中依赖了 callback，因此我们可以创建一个模拟函数来模拟这个 callback
  const mockCallback = jest.fn(x => 100 + x);
  forEach(arr, mockCallback);

  // 接下来就进入到测试环节，我们可以利用模拟函数上面的诸多方法来进行一个验证
  //   [
  //     [ 1 ],
  //     [ 2 ],
  //     [ 3 ]
  //   ];
  expect(mockCallback.mock.calls).toHaveLength(3);

  // 测试每一次调用 callback 的时候传入的参数是否符合预期
  expect(mockCallback.mock.calls[0][0]).toBe(1);
  expect(mockCallback.mock.calls[1][0]).toBe(2);
  expect(mockCallback.mock.calls[2][0]).toBe(3);

  console.log(mockCallback.mock.results);
  // 针对每一次 callback 被调用后的返回值进行测试
  expect(mockCallback.mock.results[0].value).toBe(101);
  expect(mockCallback.mock.results[1].value).toBe(102);
  expect(mockCallback.mock.results[2].value).toBe(103);

  // 模拟函数是否被调用过
  expect(mockCallback).toHaveBeenCalled();
  // 前面在调用的时候是否有参数为 1 以及参数为 2 的调用
  expect(mockCallback).toHaveBeenCalledWith(1);
  expect(mockCallback).toHaveBeenCalledWith(2);
  // 还可以对模拟函数的参数进行一个边界判断，判断最后一次调用是否传入的参数为 3
  expect(mockCallback).toHaveBeenLastCalledWith(3);
});

async function fetchData() {
  const res = await fetch('https://www.example.com/data');
  const data = await res.json();
  return data;
}
// 创建了一个空的模拟函数
const fetchDataMock = Jest.fn();
const fakeData = { id: 1, name: 'muddyrain' };
// 设置该模拟函数的实现
fetchDataMock.mockImplementation(() => Promise.resolve(fakeData));
// 通过模拟函数的一些方法来设置该模拟函数的行为

test('模拟网络请求正常', async () => {
  const data = await fetchDataMock();
  expect(data).toEqual({ id: 1, name: 'muddyrain' });
});
