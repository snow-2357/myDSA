let nums = [-1, 0, 1, 2, -1, -4];

const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  console.log(nums);
  let length = nums.length;
  let sol = [];

  for (let i = 0; i < length - 2; i++) {
    let low = i + 1,
      high = length - 1;
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    } // i start skip
    while (low < high) {
      if (nums[low] + nums[high] + nums[i] == 0) {
        sol.push([nums[i], nums[low], nums[high]]);
        low++;
        if (nums[low] === nums[low - 1] && low < high) {
          low++; // low start skip
        }
      } else if (nums[low] + nums[high] + nums[i] > 0) {
        high--;
      } else {
        low++;
      }
    }
  }
  return sol;
};

console.log(threeSum(nums));
