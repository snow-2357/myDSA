/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function (nums, k) {
//   for (let i = 0; i < k; i++) {
//     let f = nums.length - 1;
//     l = nums.length - 2;
//     while (l >= 0) {
//       [nums[f], nums[l]] = [nums[l], nums[f]];
//       f--;
//       l--;
//     }
//   }
// };
// fails to run for large k and nums.length

const rotate = function (nums, k) {
  const reverse = (low, high) => {
    while (low < high) {
      [nums[low], nums[high]] = [nums[high], nums[low]];
      low++;
      high--;
    }
  };
  k = k % nums.length;

  reverse(0, nums.length - 1);
  // console.log(nums);
  reverse(0, k - 1);
  // console.log(nums);
  reverse(k, nums.length - 1);
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
