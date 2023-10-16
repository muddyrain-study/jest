import { startTimeout, startTimer, stopTimeout, stopTimer } from '../tools';
beforeEach(() => {
    jest.useFakeTimers();
});
afterEach(() => {
    // 重置所有定时器
    jest.clearAllTimers();
    // 恢复原本的定时器
    jest.useRealTimers();
});
test('测试 startTimer', () => {
    const callback = jest.fn();
    const interval = 1000;
    const setInterval = jest.spyOn(global, 'setInterval');
    const timerId = startTimer(callback, interval);
    // 断言定时器被调用了一次
    expect(setInterval).toBeCalledTimes(1);
    // 断言定时器被调用了一次且只被调用了一次
    expect(setInterval).toBeCalledWith(expect.any(Function), interval);
    // 时间快进 interval 毫秒
    jest.advanceTimersByTime(interval);
    expect(callback).toBeCalledTimes(1);
    jest.advanceTimersByTime(interval);
    expect(callback).toBeCalledTimes(2);
    expect(setInterval).toBeCalledTimes(1);
    stopTimer(timerId);
});
test('测试 stopTimer', () => {
    const callback = jest.fn();
    const interval = 1000;
    const setInterval = jest.spyOn(global, 'setInterval');
    const timerId = startTimer(callback, interval);
    stopTimer(timerId);
    expect(setInterval).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(interval);
    expect(callback).toHaveBeenCalledTimes(0);
    expect(callback).not.toBeCalled();
});
test('开启延时器', () => {
    const callback = jest.fn();
    const timeout = 3000;
    const setTimeout = jest.spyOn(window, 'setTimeout');
    startTimeout(callback, timeout);
    // 进行断言测试
    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1000);
    expect(callback).not.toHaveBeenCalled();
    jest.advanceTimersByTime(2000);
    expect(callback).toHaveBeenCalled();
    expect(setTimeout).toBeCalledTimes(1);
});
test('停止计时器', () => {
    const callback = jest.fn();
    const timeout = 3000;
    const setTimeout = jest.spyOn(window, 'setTimeout');
    const timerId = startTimeout(callback, timeout);
    stopTimeout(timerId);
    jest.advanceTimersByTime(timeout);
    expect(callback).not.toHaveBeenCalled();
    expect(setTimeout).toBeCalledTimes(1);
});
test('时间不能传递负数', () => {
    const callback = jest.fn();
    const timeout = -3000;
    const setTimeout = jest.spyOn(window, 'setTimeout');
    const timerId = startTimeout(callback, timeout);
    stopTimeout(timerId);
    jest.advanceTimersByTime(5000);
    expect(callback).not.toHaveBeenCalled();
    expect(setTimeout).toBeCalledTimes(0);
});
