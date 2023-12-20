// // sorting two sorted array with two pointer
// const arr1 = [1, 4, 7];
// const arr2 = [2, 3, 5];
// const arr3 = [];

// let f1 = 0;
// let f2 = 0;
// while (f1 < arr1.length && f2 < arr2.length) {
//   if (arr1[f1] < arr2[f2]) {
//     arr3.push(arr1[f1]);
//     f1++;
//   } else {
//     arr3.push(arr2[f2]);
//     f2++;
//   }
// }
// while (f1 < arr1.length) {
//   arr3.push(arr1[f1]);
//   f1++;
// }
// while (f2 < arr2.length) {
//   arr3.push(arr2[f2]);
//   f2++;
// }
// console.log(arr3, f1, f2);

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const merge = (arr1, arr2) => {
  const arr3 = [];
  let f1 = 0;
  let f2 = 0;

  while (f1 < arr1.length && f2 < arr2.length) {
    if (arr1[f1] <= arr2[f2]) {
      arr3.push(arr1[f1]);
      f1++;
    } else {
      arr3.push(arr2[f2]);
      f2++;
    }
  }
  while (f1 < arr1.length) {
    arr3.push(arr1[f1]);
    f1++;
  }
  while (f2 < arr2.length) {
    arr3.push(arr2[f2]);
    f2++;
  }
  return arr3;
};
var sortArray = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }
  let mid = Math.floor(nums.length / 2);

  const left = nums.slice(0, mid);
  const right = nums.slice(mid);

  const sortedLeft = sortArray(left);
  const sortedRight = sortArray(right);

  return merge(sortedLeft, sortedRight);
};
