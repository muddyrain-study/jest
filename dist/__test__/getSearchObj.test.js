import tools from '../tools';
import 'jest-location-mock';
describe('测试getSearchObj', () => {
    test('测试是否正常返回对象', () => {
        window.location.href = 'https://www.baidu.com?a=1&b=2';
        const res = tools.getSearchObj();
        expect(res).toEqual({ a: '1', b: '2' });
        expect(window.location.search).toBe('?a=1&b=2');
    });
    test('测试参数为空的情况', () => {
        window.location.href = 'https://www.baidu.com';
        const res = tools.getSearchObj();
        expect(res).toEqual({});
        expect(window.location.search).toBe('');
    });
});
