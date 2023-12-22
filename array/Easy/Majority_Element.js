const nums = [3, 2, 3, 2, 7, 1, 8, 1, 1, 5, 5, 5, 5, 1];
// var majorityElement = function(nums) {
const size = Math.floor(nums.length / 3);
const arr = {};
const sol = [];

for (i of nums) {
  arr[i] = arr[i] ? arr[i] + 1 : 1;
}

console.log(arr);
