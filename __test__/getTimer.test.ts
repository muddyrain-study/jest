import getTimer from '../src/ts/modules/util';

describe('测试getTimer', () => {
  let timer: ReturnType<typeof getTimer>;
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('开始和结束是否正确', () => {
    const callback = jest.fn();
    const setInterval = jest.spyOn(window, 'setInterval');

    const timer = getTimer(1000, {}, callback);
    timer.start();

    jest.advanceTimersByTime(500);
    expect(setInterval).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledTimes(0);
    jest.advanceTimersByTime(500);
    expect(callback).toHaveBeenCalledTimes(1);
    timer.stop();
    timer.start();
    jest.advanceTimersByTime(500);
    expect(setInterval).toHaveBeenCalledTimes(2);
    jest.advanceTimersByTime(500);
    expect(setInterval).toHaveBeenCalledTimes(2);
    jest.advanceTimersByTime(3000);
    expect(setInterval).toHaveBeenCalledTimes(2);
    timer.stop();
  });
});
