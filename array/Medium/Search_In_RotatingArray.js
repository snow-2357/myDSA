/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let first = 0;
  last = nums.length - 1;
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[first] <= nums[mid]) {
      if (nums[first] < nums[mid]) {
        // [first, last] is sorted
        if (nums[first] <= target && target <= nums[mid]) {
          // target in middle
          last = mid - 1;
        } else {
          first = mid + 1;
        }
      }
    } else {
      if (nums[high] >= target && target >= nums[mid]) {
        // target in middle of mid and high
        first = mid + 1;
      } else {
        last = mid - 1;
      }
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 2));
