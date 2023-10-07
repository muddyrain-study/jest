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

const userData = require('./users.json');
const { default: axios } = require('axios');
Jest.mock('axios', () => {
  return {
    get: Jest.fn(() => Promise.resolve(userData)),
  };
});

test('测试异步请求', async () => {
  expect((await axios.get('http://127.0.0.1:5500/users.json')).data).toEqual(
    userData
  );
});
