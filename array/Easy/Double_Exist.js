// Given an array arr of integers, check if there exist two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  const hashMap = new Map();
  for (let i of arr) {
    if (!hashMap.has(i)) {
      hashMap.set(2 * i, 1);
      hashMap.set(i / 2, 1);
    } else {
      return true;
    }
  }
  return false;
};

console.log(checkIfExist([3, 1, 7, 11]));
