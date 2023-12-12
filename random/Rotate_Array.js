/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  for (let i = 0; i < k; i++) {
    let f = nums.length - 1;
    l = nums.length - 2;
    while (l >= 0) {
      [nums[f], nums[l]] = [nums[l], nums[f]];
      f--;
      l--;
    }
  }
};
