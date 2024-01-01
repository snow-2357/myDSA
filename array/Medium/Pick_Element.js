// You must write an algorithm that runs in O(log n) time.

let nums = [3, 4, 3, 2, 1];
var findPeakElement = function (nums) {
  if (nums.length == 1) return 0;
  if (nums[0] > nums[1]) return 0;
  if (nums[nums.length - 1] > nums[nums.length - 2]) return nums.length - 1;

  let low = 1,
    high = nums.length - 2;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    console.log(mid);
    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      return nums[mid];
    } else if (nums[mid] > nums[mid - 1]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
};

console.log(findPeakElement(nums));
