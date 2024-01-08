/**
 * @param {number[]} nums
 * @return {number}
 */
// Follow up: Can you find an O(n) solution?

var thirdMax = function (nums) {
  if (nums.length == 1) return nums[0];
  let high = -Infinity,
    mid = -Infinity,
    last = -Infinity;
  for (let i of nums) {
    // console.log(i);
    if (i > high) {
      last = mid;
      mid = high;
      high = i;
    } else if (i > mid && i < high) {
      last = mid;
      mid = i;
    } else if (i > last && i < mid) {
      last = i;
    }
  }
  return last === -Infinity ? Math.max(high, mid, last) : last;
};

console.log(thirdMax([1, 2, -2147483648]));
