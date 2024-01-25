/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function (nums) {
//   const map = new Map();
//   for (i of nums) {
//     if (map.has(i)) map.set(i, map.get(i) + 1);
//     else map.set(i, 1);
//   }
//   for (i of map) {
//     if (i[1] >= nums.length / 2) return i[0];
//   }
// };

// with 0(1) space moores voting this will work if a majority exist

const majorityElement = (nums) => {
  let ele = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (count == 0) {
      ele = nums[i];
    }
    if (ele == nums[i]) {
      count++;
    } else {
      count--;
    }
  }
  return ele;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
