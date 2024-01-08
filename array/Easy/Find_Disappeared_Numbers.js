/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const hashMap = new Map();
  let sol = [];
  for (let i of nums) {
    hashMap.set(i, 1);
  }

  console.log(!hashMap.get(5));

  for (let i = 1; i <= nums.length; i++) {
    if (!hashMap.has(i)) {
      sol.push(i);
    }
  }
  return sol;
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
