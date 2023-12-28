// var sortColors = function (nums) {
//   let arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     arr[nums[i]] = arr[nums[i]] ? arr[nums[i]] + 1 : 1;
//   }
//   console.log(arr);
// //   for (let i = 0; i < nums.length; i++) {
// //     const element = array[i];
//     // put the elements according to the count
// //   }
// };
// dutch national flag

var sortColors = function (nums) {
  let low = 1,
    mid = 0,
    high = nums.length - 1;
  while (mid < high - 1) {
    if (nums[mid] == 0) {
      console.log(1)[(nums[mid], nums[low])] = [nums[low], nums[mid]];
      low++;
      mid++;
    } else if (nums[mid] == 1) {
      console.log(2);
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      console.log(3);
      //   mid++;
      high--;
    }
    console.log(nums);
  }
  console.log(nums);
};

sortColors([1, 2, 0]);
