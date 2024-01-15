// Given an integer array nums sorted in non-decreasing order,
//  remove some duplicates
// in-place such that each unique element appears at most twice.
//  The relative order of the elements should be kept the same.
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let low = 1;
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    console.log(count);
    if (nums[i] == nums[i - 1] && count < 2) {
      count++;
      nums[low] = nums[i];
      low++;
    } else if (nums[i] == nums[i - 1] && count > 2) {
      count++;
    } else if (nums[i] != nums[i - 1]) {
      count = 1;
      nums[low] = nums[i];
      low++;
    }
  }
  return low;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
