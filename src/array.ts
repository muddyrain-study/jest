export function range(start?: any, stop?: any, step?: any) {
  start = start ? (isNaN(+start) ? 0 : +start) : 0;
  stop = stop ? (isNaN(+stop) ? 0 : +stop) : 0;
  step = step ? (isNaN(+step) ? 0 : +step) : 1;
  if ((start < stop && step < 0) || (start > stop && step > 0)) {
    step = -step;
  }
  const arr: number[] = [];
  for (let i = start; start > stop ? i > stop : i < stop; i += step) {
    arr.push(i);
  }
  return arr;
}
