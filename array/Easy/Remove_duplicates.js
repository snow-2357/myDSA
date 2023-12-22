const nums = [1, 1, 2];
// we can also use map
// optimize
const removeDuplicates = (nums) => {
  let j = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[j] !== nums[i]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
};

console.log(removeDuplicates(nums));
