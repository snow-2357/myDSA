/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let low = 0,
    high = arr.length - 1;

  while (arr[low] < arr[low + 1] || arr[high] < arr[high - 1]) {
    if (arr[low] < arr[low + 1]) low++;
    if (arr[high] < arr[high - 1]) high--;
  }
  //   they will touch the peak the other 2 for the peak in 0 and length-1 but they are not actually mountain
  return low != high || low == arr.length - 1 || high == 0 ? false : true;
};

console.log(validMountainArray([1, 2, 3, 2]));
