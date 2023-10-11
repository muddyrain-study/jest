/**
 * 判断数组中是否有重复的元素
 */
export function isRepeat(arr: (number | string)[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
}
/**
 * 生成随机数
 */
export function randomNum(): number[] {
  let num = 0;
  // 存放电脑生成的随机数
  let comNum: number[] = [];
  while (true) {
    comNum.length = 0;
    for (let i = 0; i < 4; i++) {
      num = Math.floor(Math.random() * 10);
      comNum.push(num);
    }
    if (!isRepeat(comNum)) {
      return comNum;
    }
  }
}
