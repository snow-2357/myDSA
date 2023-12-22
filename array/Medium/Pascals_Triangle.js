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

// pascals triangle formula n+1Cr and nCr is n*n-1*... upto rth upon r*r-1*.....1
// each time we want a new value we hava can just take the previous one and multiply it with (n / index) and im reducing the n-- each loop and index ^
// 1 ,1*5/1 ,1*5/1*4/2, 1*5/1*4/2*3/3, 1*5/1*4/2*3/3*2/4, 1*5/1*4/2*3/3*2/4*1/5
