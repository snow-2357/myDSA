/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let low = 0,
    high = nums.length - 1,
    mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (nums[mid] == target) {
      //
      console.log(mid);
      low = mid;
      high = mid;
      while (nums[low] == target || nums[high] == target) {
        if (nums[low] == target) {
          low--;
        }
        if (nums[high] == target) {
          high++;
        }
      }
      return [low + 1, high - 1];
    } else if (nums[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return [-1, -1];
};

console.log(searchRange([], 6));
