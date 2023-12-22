// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum.
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = 0;
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    temp = temp + nums[i];
    if (temp > max) {
      max = temp;
    }
    if (temp < 0) {
      temp = 0;
    }
  }
  return max;
};
