// 该游戏是一个猜数字的游戏
// 玩家输入 4 位 0-9 不重复的数字 和电脑所生成的4位 0-9 不重复的数字进行比较
// 如果位置和大小都正确 计入 A
// 如果数字正确但位置不正确 计入 B
// 例如：电脑生成 1234 玩家输入 1357
// 1 是正确的数字正确的位置 计入 A
// 3 是正确的数字但位置不正确 计入 B
// 5 和 7 都不是正确的数字 不计入 A 或 B
// 所以最后输出 1A1B
// 一共有 10 次机会 如果 10 次机会内没有猜出来 游戏结束

import { isRepeat } from './utils/tools';

const { randomNum } = require('./utils/tools');
const readline = require('readline-sync');

/**
 * 游戏主函数
 */
function main(): void {
  // 用户输入的猜想数字 a 代表数字和位置都正确的个数 b 代表数字正确但位置不正确的个数
  // chance 代表猜测次数
  let guessNum: string = '';
  let a: number = 0;
  let b: number = 0;
  let chance: number = 10;

  // 电脑生成的4位不重复数字
  const comNum: number[] = randomNum();

  const arr: string[] = [
    '加油!',
    '再接再厉!',
    '还差一点点!',
    '很简单的!',
    '也许你需要一点运气!',
  ];
  while (chance) {
    console.log('请输入你要猜测的数字');
    guessNum = readline.question('');
    if (guessNum.length !== 4) {
      console.log('请输入4位数字');
      continue;
    } else if (isNaN(Number(guessNum))) {
      console.log('输入的数字有问题');
    } else {
      // 符合要求，进行一个判断
      // 判断是否重复 需要将字符串转换为数组
      let guessNum2: string[] = [...guessNum];
      if (!isRepeat(guessNum2)) {
        // 如果能够进入到此 if 说明玩家输入的数字是OK的 可以开始进行判断
        for (let i = 0; i < guessNum2.length; i++) {
          for (let j = 0; j < comNum.length; j++) {
            if (guessNum2[i] == comNum[j].toString()) {
              // 如果能够进入到此 if 说明数字相同
              if (i === j) {
                // 如果进入此 if  说明 位置也相同
                a++;
              } else {
                b++;
              }
            }
          }
        }
        if (a === 4) {
          // 如果进入此 if 说明玩家全部猜对了 跳出while
          break;
        } else {
          console.log(`${a}A${b}B`);
          chance--;
          if (chance !== 0) {
            let index = Math.floor(Math.random() * arr.length);
            console.log(`你还剩下${chance}次机会,${arr[index]}`);
          }
          a = b = 0; // 清空 a 和 b 的值
        }
      } else {
        console.log('你输入的数字重复了, 请重新输入!');
      }
    }
  }
}

main();
