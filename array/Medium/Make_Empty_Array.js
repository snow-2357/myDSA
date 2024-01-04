/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let hashMap = new Map();
  for (let i of nums) {
    hashMap.set(i, hashMap.has(i) ? hashMap.get(i) + 1 : 1);
  }
  let count = 0;
  for (let i of hashMap.values()) {
    if (i == 1) return -1;
    console.log(count); //we can make any number with 2 and 3 higher then 2
    count += Math.floor(i / 3) + (i % 3 == 0 ? 0 : 1);
  }
  return count;
};

console.log(
  minOperations([
    14, 12, 14, 14, 12, 14, 14, 12, 12, 12, 12, 14, 14, 12, 14, 14, 14, 12, 12,
  ])
);
