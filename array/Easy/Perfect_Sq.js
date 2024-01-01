/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num == 1) return true;
  let low = 1,
    high = num / 2,
    mid;
  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    if (mid * mid == num) {
      return true;
    } else if (mid * mid < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
};

console.log(isPerfectSquare(2));
