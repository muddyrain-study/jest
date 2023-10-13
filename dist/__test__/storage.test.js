import storage, { STORAGE_KEY } from '../storage';
describe('测试storage', () => {
    test('测试存储', () => {
        storage.set('newKey', 'hello');
        expect(localStorage.getItem(STORAGE_KEY + 'newKey')).toBe('hello');
    });
    test('测试获取', () => {
        localStorage.setItem(STORAGE_KEY + 'newKey', 'Word');
        expect(storage.get('newKey')).toBe('Word');
    });
});
