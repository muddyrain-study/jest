// storage.ts
/**
 * 专门负责存储内容到 localstorage 的工具库
 */
export const STORAGE_KEY = 'my-app-';
/**
 * 负责存储
 */
function set(key, value) {
    localStorage.setItem(STORAGE_KEY + key, value);
}
/**
 * 负责获取
 */
function get(key) {
    return localStorage.getItem(STORAGE_KEY + key);
}
export default {
    get,
    set,
};
