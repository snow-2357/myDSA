// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

// You should rearrange the elements of nums such that the modified array follows the given conditions:

// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.

let nums = [3, 1, -2, -5, 2, -4];

var rearrangeArray = function (nums) {
  let sol = new Array(nums.length - 1);
  let positiveIndex = 0,
    negativeIndex = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      sol[negativeIndex] = nums[i];
      negativeIndex += 2;
    } else {
      sol[positiveIndex] = nums[i];
      positiveIndex += 2;
    }
  }
  return sol;
};
console.log(rearrangeArray(nums));
