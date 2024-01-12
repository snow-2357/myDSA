// 1498. Number of Subsequences That Satisfy the Given Sum Condition
// Medium
// Topics
// Companies
// Hint
// You are given an array of integers nums and an integer target.

// Return the number of non-empty subsequences of nums such that the sum of the minimum and maximum element on it is less or equal to target. Since the answer may be too large, return it modulo 109 + 7.

// Example 1:

// Input: nums = [3,5,6,7], target = 9
// Output: 4
// Explanation: There are 4 subsequences that satisfy the condition.
// [3] -> Min value + max value <= target (3 + 3 <= 9)
// [3,5] -> (3 + 5 <= 9)
// [3,5,6] -> (3 + 6 <= 9)
// [3,6] -> (3 + 6 <= 9)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const numSubseq = function (nums, target) {
  let low = 0,
    high = nums.length - 1;
  let sol = 0;
  const sqCount = [1];
  for (let i = 1; i < nums.length; i++) sqCount.push(sqCount[i - 1] * 2); // to count the no of subsequence
  nums.sort((a, b) => a - b);
  while (low <= high) {
    if (nums[low] + nums[high] <= target) {
      sol += sqCount[high - low];
      low++;
    } else {
      high--;
    }
  }
  return sol;
};

console.log(numSubseq([7, 10, 7, 3, 7, 5, 4], 12));
