// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
// if we can reach our current Goal from our current position then,
// we can shift our goal to current position because we no longer need to
// check if we can get to previous Goal because if we can get to the current
// position we can get to goal as well hence we can overall shift the goal itself.
// Wish I could say it better.

const canJump = function (nums) {
  let length = nums.length - 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] + i >= length) {
      length = i;
    }
  }
  return length == 0;
};

console.log(canJump([2, 3, 1, 0, 4]));
