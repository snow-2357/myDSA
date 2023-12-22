const nums = [2, 7, 11, 15],
  target = 9;

// returns numbers
// const twoSum = (nums, target) => {
//   const map = new Map();
//   for (let i of nums) {
//     if (map.has(i)) {
//       return [map.get(i), i];
//     }
//     map.set(target - i, i);
//   }
//   console.log(map);
// };
// returns index
const twoSum = (nums, target) => {
  const map = new Map();
  for (let i in nums) {
    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    }
    map.set(target - nums[i], i);
  }
  console.log(map);
};

console.log(twoSum(nums, target));
