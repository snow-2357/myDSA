// we can use hash to store and check later

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let solution = 0;
  for (i of nums) {
    solution ^= i;
  }
  for (let i = 0; i <= nums.length; i++) {
    solution ^= i;
  }
  return solution;
};
