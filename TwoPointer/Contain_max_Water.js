/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (nums) => {
  let low = 0,
    high = nums.length - 1,
    area = 0;

  while (low < high) {
    let temp = (high - low) * Math.min(nums[high], nums[low]);
    area = Math.max(area, temp);
    if (nums[high] < nums[low]) high--;
    else low++;
  }
  return area;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
