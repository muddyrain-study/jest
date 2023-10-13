import storage from './storage.js';
// 获取 DOM 元素
const saveBtn = document.getElementById('saveBtn');
const getBtn = document.getElementById('getBtn');
const content = document.getElementById('content');
const username = document.getElementById('username');
saveBtn.addEventListener('click', () => {
    storage.set('user', content.value);
    content.value = '';
});
getBtn.addEventListener('click', () => {
    const value = storage.get('user');
    if (value !== null) {
        username.innerHTML = value;
    }
    else {
        username.innerHTML = '';
    }
});