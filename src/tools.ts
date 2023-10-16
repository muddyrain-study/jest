/**
 * 工具函数库
 */

// 该函数的作用是将 url 后面的查询字符串转为对象
const getSearchObj = () => {
  // ?a=1&b=2
  const { search } = window.location;

  // a=1&b=2
  const searchStr = search.slice(1);

  // ['a=1', 'b=2']
  const pairs = searchStr.split('&');

  // { 'a': '1' }
  const searchObj: Record<string, string> = {};

  pairs.forEach(pair => {
    // [a, 1]
    const [key, value] = pair.split('=');
    searchObj[key] = value;
  });

  return searchObj;
};

// 和服务器通信获取数据
const fetchData = (id: number) => {
  return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => res.json())
    .then(res => res);
};

/**
 * 工具函数库
 */

/**
 * 开始计时器
 */
export function startTimer(callback: () => void, interval: number) {
  if (interval < 0) {
    return;
  }
  const timerId = setInterval(() => {
    callback();
  }, interval);
  return timerId;
}

/**
 * 停止计时器
 */
export function stopTimer(timerId: NodeJS.Timeout | undefined) {
  if (timerId) {
    clearInterval(timerId);
  }
}

/**
 * 开始延时器
 */
export function startTimeout(callback: () => void, timeout: number) {
  if (timeout < 0) {
    return;
  }
  const timeoutId = setTimeout(() => {
    callback();
  }, timeout);
  return timeoutId;
}

/**
 * 停止延时器
 */
export function stopTimeout(timeoutId: NodeJS.Timeout | undefined) {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
}

export default {
  getSearchObj,
  fetchData,
};
