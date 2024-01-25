const majorityElement = (nums) => {
  if (nums.length < 3) {
    return nums;
  }

  let ele1 = nums[0],
    count1 = 1,
    ele2 = nums[1],
    count2 = 1;

  for (let i = 2; i < nums.length; i++) {
    if (count1 == 0 && nums[i] !== ele2) {
      ele1 = nums[i];
      count1 = 1;
    } else if (count2 == 0 && nums[i] !== ele1) {
      ele2 = nums[i];
      count2 = 1;
    } else if (ele1 == nums[i]) {
      count1++;
    } else if (ele2 == nums[i]) {
      count2++;
    } else {
      count1--;
      count2--;
    }
  }

  count1 = 0;

  count2 = 0;

  for (let i of nums) {
    if (i == ele1) count1++;
    if (i == ele2) count2++;
  }
  return count1 < count2 ? ele2 : ele1;
};

console.log(majorityElement([2]));
