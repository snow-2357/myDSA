/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let bigArr = [];

  for (let i = 0; i < numRows; i++) {
    let arr = [1];

    let n = i;

    for (let index = 1; index <= i; index++) {
      arr[index] = arr[index - 1] * (n / index);
      n--;
    }

    bigArr.push(arr);
  }
  return bigArr;
};
