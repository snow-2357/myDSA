/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = function (nums) {
  if (nums.length == 1 || nums[0] < nums[nums.length - 1]) return nums[0]; // arry with single element and 0 rotation

  let low = 0,
    high = nums.length - 1,
    mid;
  while (low < high) {
    mid = Math.floor((low + high) / 2);
    if (nums[mid] < nums[mid - 1]) {
      return nums[mid];
    } else if (nums[mid] >= nums[high]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return nums[low];
};

const nums = [11, 1, 10, 10, 10];

console.log(findMin(nums));
// not solved
